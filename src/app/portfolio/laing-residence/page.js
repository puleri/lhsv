import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["laing-residence"];

export const metadata = {
  title: "Bellevue Residence | Lockhart Suver",
  description: "Bellevue Residence project details, collaborators, and full gallery.",
};

export default function LaingResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
