import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["first-hill-penthouse"];

export const metadata = {
  title: "First Hill Penthouse | Lockhart Suver",
  description: "First Hill Penthouse project details, collaborators, and full gallery.",
};

export default function FirstHillPenthousePage() {
  return <PortfolioProjectTemplate project={project} />;
}