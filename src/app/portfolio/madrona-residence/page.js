
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["madrona-residence"];

export const metadata = {
  title: "Madrona Residence | Lockhart Suver",
  description: "Madrona Residence project details, collaborators, and full gallery.",
};

export default function MadronaResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

