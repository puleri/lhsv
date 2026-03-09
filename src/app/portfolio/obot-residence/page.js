import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["obot-residence"];

export const metadata = {
  title: "Medina Residence | Lockhart Suver",
  description: "Medina Residence project details, collaborators, and full gallery.",
};

export default function ObotResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
