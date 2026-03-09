import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["four-seasons-penthouse"];

export const metadata = {
  title: "Four Seasons Penthouse | Lockhart Suver",
  description: "Four Seasons Penthouse project details, collaborators, and full gallery.",
};

export default function FourSeasonsPenthousePage() {
  return <PortfolioProjectTemplate project={project} />;
}

