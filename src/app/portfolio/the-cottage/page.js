import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["the-cottage"];

export const metadata = {
  title: "The Cottage | Lockhart Suver",
  description: "The Cottage project details, collaborators, and full gallery.",
};

export default function TheCottagePage() {
  return <PortfolioProjectTemplate project={project} />;
}