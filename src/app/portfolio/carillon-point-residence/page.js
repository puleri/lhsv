import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["carillon-point-residence"];

export const metadata = {
  title: "Carillon Point Residence | Lockhart Suver",
  description: "Carillon Point Residence project details, collaborators, and full gallery.",
};

export default function CarillonPointResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

