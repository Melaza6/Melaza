export type ProjectStatus = "Planning" | "Active" | "In Development" | "Completed";

export type Project = {
  name: string;
  industry: string;
  location: string;
  servicesProvided: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    name: "Luigi Vapor",
    industry: "Retail / Vape Shop",
    location: "United States",
    servicesProvided: ["Digital operations", "Website planning", "Workflow support"],
    status: "Active",
  },
  {
    name: "S&T Construccion",
    industry: "Construction",
    location: "Colombia / United States",
    servicesProvided: ["Public website", "Service organization", "Admin-ready structure"],
    status: "In Development",
  },
  {
    name: "KTD Security",
    industry: "Security Company",
    location: "United States",
    servicesProvided: ["SecureStart", "Documentation", "Operating procedures"],
    status: "Planning",
  },
  {
    name: "Sample Food Truck",
    industry: "Food Truck",
    location: "United States",
    servicesProvided: ["Menu flow", "Booking intake", "Digital presence"],
    status: "Planning",
  },
  {
    name: "Sample Restaurant",
    industry: "Restaurant",
    location: "Colombia",
    servicesProvided: ["Website", "Contact flow", "Process organization"],
    status: "Planning",
  },
  {
    name: "Sample Security Company",
    industry: "Security Company",
    location: "United States",
    servicesProvided: ["SecureScale", "Access management", "Systems consulting"],
    status: "Planning",
  },
];
