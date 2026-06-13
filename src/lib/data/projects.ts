export type ProjectStatus = "Planning" | "Active" | "In Development" | "Completed";

export type Project = {
  name: string;
  industry: string;
  location: string;
  serviceType: string;
  servicesProvided: string[];
  description: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    name: "S&T Construcción",
    industry: "Construction",
    location: "Colombia / U.S.-ready public presence",
    serviceType: "Business website and admin-ready app planning",
    servicesProvided: [
      "Public construction company website",
      "Service presentation",
      "Project/gallery structure",
      "Mobile-ready layout",
      "Admin panel planning",
      "Photo and service update workflow",
      "Hosting/deployment preparation",
    ],
    description:
      "S&T Construcción is an example of how Melaza helps service businesses create a professional digital presence. The project focuses on presenting construction services clearly, organizing project photos, preparing an admin-ready structure, and planning for future updates by the business owner.",
    status: "In Development",
  },
  {
    name: "Luigi Vapor",
    industry: "Retail / Vape Shop",
    location: "United States",
    serviceType: "Digital operations and public website planning",
    servicesProvided: ["Website planning", "Workflow support", "Lead and service request organization"],
    description:
      "A retail-focused example showing how Melaza can help organize a public online presence, customer contact flow, and practical digital operations for a small business.",
    status: "Active",
  },
  {
    name: "Sample Food Truck",
    industry: "Food Truck",
    location: "United States",
    serviceType: "Website structure and customer request flow",
    servicesProvided: ["Menu flow", "Booking intake", "Digital presence"],
    description:
      "A sample service-business project focused on making menu information, event requests, and customer contact steps easier to understand and manage.",
    status: "Planning",
  },
  {
    name: "Sample Restaurant",
    industry: "Restaurant",
    location: "Colombia",
    serviceType: "Public presence and workflow organization",
    servicesProvided: ["Website", "Contact flow", "Process organization"],
    description:
      "A sample restaurant project showing how Melaza can organize service pages, contact steps, and basic workflow planning without exposing private operations.",
    status: "Planning",
  },
];
