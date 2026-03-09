import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["beans-bight-residence"];

export const metadata = {
  title: "Beans-Bight Residence | Lockhart Suver",
  description: "Beans-Bight Residence project details, collaborators, and full gallery.",
};

export default function BeansBightResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
