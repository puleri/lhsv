import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["pioneer-square-residence"];

export const metadata = {
  title: "Pioneer Square Residence | Lockhart Suver",
  description: "Pioneer Square Residence project details, collaborators, and full gallery.",
};

export default function PioneerSquareResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
