import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["arrow-bay"];

export const metadata = {
  title: "Arrow Bay | Lockhart Suver",
  description: "Arrow Bay project details, collaborators, and full gallery.",
};

export default function ArrowBayPage() {
  return <PortfolioProjectTemplate project={project} />;
}
