import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["waverly-residence"];

export const metadata = {
  title: "Waverly Residence | Lockhart Suver",
  description: "Waverly Residence project details, collaborators, and full gallery.",
};

export default function WaverlyResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
