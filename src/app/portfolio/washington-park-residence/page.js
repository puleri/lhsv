import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["washington-park-residence"];

export const metadata = {
  title: "Washington Park Residence | Lockhart Suver",
  description: "Washington Park Residence project details, collaborators, and full gallery.",
};

export default function WashingtonParkResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}
