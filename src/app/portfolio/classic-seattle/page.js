
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["classic-seattle"];

export const metadata = {
  title: "Classic Seattle | Lockhart Suver",
  description: "Classic Seattle project details, collaborators, and full gallery.",
};

export default function ClassicSeattlePage() {
  return <PortfolioProjectTemplate project={project} />;
}