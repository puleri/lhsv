import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["the-bluff"];

export const metadata = {
  title: "The Bluff | Lockhart Suver",
  description: "The Bluff project details, collaborators, and full gallery.",
};

export default function TheBluffPage() {
  return <PortfolioProjectTemplate project={project} />;
}
