import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["big-star-belltown"];

export const metadata = {
  title: "Big Star Belltown | Lockhart Suver",
  description: "Big Star Belltown project details, collaborators, and full gallery.",
};

export default function BigStarBelltownPage() {
  return <PortfolioProjectTemplate project={project} />;
}
