import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["southpaw-residence"];

export const metadata = {
  title: "Southpaw Residence | Lockhart Suver",
  description: "Southpaw Residence project details, collaborators, and full gallery.",
};

export default function SouthpawResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
