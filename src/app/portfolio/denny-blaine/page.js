import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["denny-blaine"];

export const metadata = {
  title: "Denny-Blaine Residence | Lockhart Suver",
  description: "Denny-Blaine Residence project details, collaborators, and full gallery.",
};

export default function DennyBlainePage() {
  return <PortfolioProjectTemplate project={project} />;
}
