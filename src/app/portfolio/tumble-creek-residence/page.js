import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["tumble-creek-residence"];

export const metadata = {
  title: "Tumble Creek Residence | Lockhart Suver",
  description: "Tumble Creek Residence project details, collaborators, and full gallery.",
};

export default function TumbleCreekResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
