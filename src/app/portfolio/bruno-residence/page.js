import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["bruno-residence"];

export const metadata = {
  title: "Bruno Residence | Lockhart Suver",
  description: "Bruno Residence project details, collaborators, and full gallery.",
};

export default function BrunoResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

