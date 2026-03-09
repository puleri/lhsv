import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["union-bay-residence"];

export const metadata = {
  title: "Union Bay Residence | Lockhart Suver",
  description: "Union Bay Residence project details, collaborators, and full gallery.",
};

export default function UnionBayResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
