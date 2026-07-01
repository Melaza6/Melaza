import { createMelazaSupabaseClient } from "@/lib/supabase/client";

export type PublicSiteSection = {
  id: string;
  sectionType: string;
  title: string;
  subtitle?: string;
  body?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  imageUrl?: string;
  sortOrder: number;
};

export type PublicSiteService = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  sortOrder: number;
};

export type PublicSiteContent = {
  sections: PublicSiteSection[];
  services: PublicSiteService[];
};

const publicSiteId = process.env.NEXT_PUBLIC_MELAZA_PUBLIC_SITE_ID || "site-melazausa-public";

export async function fetchPublicSiteContent(): Promise<PublicSiteContent> {
  const supabase = createMelazaSupabaseClient();

  if (!supabase) {
    return { sections: [], services: [] };
  }

  // The public site uses anon reads only. Supabase RLS must expose published rows and keep private MN data closed.
  const [sectionsResult, servicesResult] = await Promise.all([
    supabase
      .from("site_sections")
      .select("id, section_type, title, subtitle, body, cta_label, cta_url, image_url, sort_order")
      .eq("site_id", publicSiteId)
      .eq("is_published", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("site_services")
      .select("id, title, description, icon, sort_order")
      .eq("site_id", publicSiteId)
      .eq("is_published", true)
      .order("sort_order", { ascending: true }),
  ]);

  return {
    sections: (sectionsResult.data ?? []).map((section) => ({
      id: section.id,
      sectionType: section.section_type,
      title: section.title,
      subtitle: section.subtitle ?? undefined,
      body: section.body ?? undefined,
      ctaLabel: section.cta_label ?? undefined,
      ctaUrl: section.cta_url ?? undefined,
      imageUrl: section.image_url ?? undefined,
      sortOrder: section.sort_order,
    })),
    services: (servicesResult.data ?? []).map((service) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon ?? undefined,
      sortOrder: service.sort_order,
    })),
  };
}

export function firstSection(sections: PublicSiteSection[], sectionType: string) {
  return sections.find((section) => section.sectionType === sectionType);
}
