import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["capitol-hill-kitchen"];

export const metadata = {
  title: "Capitol Hill Kitchen | Lockhart Suver",
  description: "Capitol Hill Kitchen project details, collaborators, and full gallery.",
};

export default function CapitolHillKitchenPage() {
  return <PortfolioProjectTemplate project={project} />;
}

