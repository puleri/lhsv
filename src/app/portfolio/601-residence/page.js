
import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["601-residence"];

export const metadata = {
  title: "601 Residence | Lockhart Suver",
  description: "601 Residence project details, collaborators, and full gallery.",
};

export default function ResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}

