import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["laurelhurst-kitchen"];

export const metadata = {
  title: "Laurelhurst Kitchen | Lockhart Suver",
  description: "Laurelhurst Kitchen project details, collaborators, and full gallery.",
};

export default function LaurelhurstKitchenPage() {
  return <PortfolioProjectTemplate project={project} />;
}
