
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["beans-view"];

export const metadata = {
  title: "Beans View | Lockhart Suver",
  description: "Beans View project details, collaborators, and full gallery.",
};

export default function BeansViewPage() {
  return <PortfolioProjectTemplate project={project} />;
}