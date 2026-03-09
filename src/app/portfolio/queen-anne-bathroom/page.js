import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["queen-anne-bathroom"];

export const metadata = {
  title: "Queen Anne Bathroom | Lockhart Suver",
  description: "Queen Anne Bathroom project details, collaborators, and full gallery.",
};

export default function QueenAnneBathroomPage() {
  return <PortfolioProjectTemplate project={project} />;
}
