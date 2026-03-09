import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["capitol-hill-arts-and-crafts-home"];

export const metadata = {
  title: "Capitol Hill Arts and Crafts Home | Lockhart Suver",
  description: "Capitol Hill Arts and Crafts Home project details, collaborators, and full gallery.",
};

export default function CapitolHillArtsAndCraftsHomePage() {
  return <PortfolioProjectTemplate project={project} />;
}
