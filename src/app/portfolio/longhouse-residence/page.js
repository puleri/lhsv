import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["longhouse-residence"];

export const metadata = {
  title: "Longhouse Residence | Lockhart Suver",
  description: "Longhouse Residence project details, collaborators, and full gallery.",
};

export default function LonghouseResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
