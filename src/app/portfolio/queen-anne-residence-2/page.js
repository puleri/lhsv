
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["queen-anne-residence-2"];

export const metadata = {
  title: "Queen Anne Residence | Lockhart Suver",
  description: "Queen Anne Residence project details, collaborators, and full gallery.",
};

export default function QueenAnneResidence2Page() {
  return <PortfolioProjectTemplate project={project} />;
}
