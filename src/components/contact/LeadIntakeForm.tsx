"use client";

import { useState, type FormEvent } from "react";
import { createMelazaSupabaseClient } from "@/lib/supabase/client";
import { services } from "@/lib/data/services";

const businessTypes = [
  "Retail shop",
  "Vape shop",
  "Food truck",
  "Restaurant",
  "Construction company",
  "Security company",
  "Professional services",
  "Local service business",
  "Cross-border operation",
];

const languages = ["English", "Spanish", "Bilingual"];
const budgetRanges = ["Not sure yet", "Under $1,000", "$1,000 - $3,000", "$3,000 - $7,500", "$7,500+"];
const timelines = ["As soon as possible", "This month", "1-3 months", "3+ months", "Exploring options"];

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  language: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
};

const initialForm: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: businessTypes[0],
  language: "English",
  service: services[0]?.title ?? "Digital Business Tools",
  budget: budgetRanges[0],
  timeline: timelines[0],
  description: "",
};

export function LeadIntakeForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const supabase = createMelazaSupabaseClient();

    if (!supabase) {
      setStatus("error");
      setMessage("The request form is not available right now. Please contact Melaza directly and we will follow up soon.");
      return;
    }

    const now = new Date().toISOString();
    const leadNotes = [
      `Preferred language: ${form.language}`,
      `Business type: ${form.businessType}`,
      `Budget range: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      "Submitted from the Melaza Landing Page public intake form.",
    ].join("\n");

    // Public users only receive anon Supabase access. RLS must allow this insert and deny public reads/updates/deletes.
    try {
      const { error } = await supabase.from("leads").insert({
        id: `lead-mlp-${Date.now()}`,
        name: form.name.trim(),
        business_name: form.businessName.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || null,
        source: "Melaza Landing Page",
        service_needed: form.service,
        message: form.description.trim(),
        status: "New",
        priority: "Medium",
        assigned_to_team_member_id: null,
        related_client_id: null,
        follow_up_date: null,
        notes: leadNotes,
        created_at: now,
        updated_at: now,
      });

      if (error) {
        throw error;
      }
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Please try again or contact Melaza directly.");
      return;
    }

    setStatus("sent");
    setMessage("Thank you. Your consultation request has been received. Our team will contact you shortly.");
    setForm(initialForm);
  }

  return (
    <form onSubmit={submitLead} className="rounded-[2rem] border border-white/20 bg-white p-5 text-slate-900 shadow-2xl shadow-slate-950/20">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="Your name" required />
        <Field label="Business name" name="businessName" value={form.businessName} onChange={(value) => setForm({ ...form, businessName: value })} placeholder="Company name" required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} placeholder="you@company.com" required />
        <Field label="Phone or WhatsApp" name="phone" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} placeholder="Best number" required />
        <Select label="Preferred language" name="language" value={form.language} options={languages} onChange={(value) => setForm({ ...form, language: value })} />
        <Select label="Type of business" name="businessType" value={form.businessType} options={businessTypes} onChange={(value) => setForm({ ...form, businessType: value })} />
        <Select label="Budget range" name="budget" value={form.budget} options={budgetRanges} onChange={(value) => setForm({ ...form, budget: value })} />
        <Select label="Timeline" name="timeline" value={form.timeline} options={timelines} onChange={(value) => setForm({ ...form, timeline: value })} />
      </div>
      <Select label="Service requested" name="service" value={form.service} options={services.map((service) => service.title)} onChange={(value) => setForm({ ...form, service: value })} className="mt-4" />
      <label className="mt-4 grid gap-2 text-sm font-bold text-melaza-indigo">
        Project description
        <textarea
          name="description"
          required
          value={form.description}
          onChange={(event) => setForm({ ...form, description: event.target.value })}
          className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
          placeholder="Briefly describe what you want to organize, improve, or build."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-melaza-poppy px-5 text-sm font-black text-melaza-indigo shadow-lg shadow-melaza-poppy/20 transition hover:bg-[#f3bc35] focus:outline-none focus:ring-2 focus:ring-melaza-indigo/25 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Request a Consultation"}
      </button>
      {message ? (
        <p className={`mt-3 text-center text-xs font-bold ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>
          {message}
        </p>
      ) : null}
      <p className="mt-3 text-center text-xs font-medium text-slate-500">
        Public intake goes to Melaza Network with status New and priority Medium.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-melaza-indigo">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
        placeholder={placeholder}
      />
    </label>
  );
}

function Select({
  label,
  name,
  value,
  options,
  onChange,
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-melaza-indigo ${className}`}>
      {label}
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
