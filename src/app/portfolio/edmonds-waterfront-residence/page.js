import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["edmonds-waterfront-residence"];

export const metadata = {
  title: "Edmonds Waterfront Residence | Lockhart Suver",
  description: "Edmonds Waterfront Residence project details, collaborators, and full gallery.",
};

export default function EdmondsWaterfrontResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

