import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["yarrow-point-residence"];

export const metadata = {
  title: "Yarrow Point Residence | Lockhart Suver",
  description: "Yarrow Point Residence project details, collaborators, and full gallery.",
};

export default function YarrowPointResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

