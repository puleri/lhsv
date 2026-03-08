import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["508-residence"];

export const metadata = {
  title: "508 Residence | Lockhart Suver",
  description: "508 Residence project details, collaborators, and full gallery.",
};

export default function Residence508Page() {
  return <PortfolioProjectTemplate project={project} />;
}
