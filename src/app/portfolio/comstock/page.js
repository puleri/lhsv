import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages.comstock;

export const metadata = {
  title: "The Perch | Lockhart Suver",
  description: "The Perch project details, collaborators, and full gallery.",
};

export default function ComstockPage() {
  return <PortfolioProjectTemplate project={project} />;
}
