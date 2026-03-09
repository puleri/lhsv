
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["light-house-residence"];

export const metadata = {
  title: "Light House Residence | Lockhart Suver",
  description: "Light House Residence project details, collaborators, and full gallery.",
};

export default function LightHouseResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
