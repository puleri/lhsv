import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["mercer-island-residence"];

export const metadata = {
  title: "Mercer Island Residence | Lockhart Suver",
  description: "Mercer Island Residence project details, collaborators, and full gallery.",
};

export default function MercerIslandResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
