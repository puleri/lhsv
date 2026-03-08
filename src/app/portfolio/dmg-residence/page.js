import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["dmg-residence"];

export const metadata = {
  title: "DMG Residence | Lockhart Suver",
  description: "DMG Residence project details, collaborators, and full gallery.",
};

export default function DMGResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
