import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["stone-house"];

export const metadata = {
  title: "Stone House | Lockhart Suver",
  description: "Stone House project details, collaborators, and full gallery.",
};

export default function StoneHousePage() {
  return <PortfolioProjectTemplate project={project} />;
}
