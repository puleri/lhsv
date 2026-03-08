import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["the-ranch"];

export const metadata = {
  title: "The Ranch | Lockhart Suver",
  description: "The Ranch project details, collaborators, and full gallery.",
};

export default function TheRanchPage() {
  return <PortfolioProjectTemplate project={project} />;
}
