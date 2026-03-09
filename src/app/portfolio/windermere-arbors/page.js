
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["windermere-arbors"];

export const metadata = {
  title: "Windermere Arbors | Lockhart Suver",
  description: "Windermere Arbors project details, collaborators, and full gallery.",
};

export default function WindermereArborsPage() {
  return <PortfolioProjectTemplate project={project} />;
}
