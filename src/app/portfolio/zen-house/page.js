import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["zen-house"];

export const metadata = {
  title: "Zen House | Lockhart Suver",
  description: "Zen House project details, collaborators, and full gallery.",
};

export default function ZenHousePage() {
  return <PortfolioProjectTemplate project={project} />;
}

