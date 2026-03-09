import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["restoration-point-residence"];

export const metadata = {
  title: "Restoration Point Residence | Lockhart Suver",
  description: "Restoration Point Residence project details, collaborators, and full gallery.",
};

export default function RestorationPointResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

