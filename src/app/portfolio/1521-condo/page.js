import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["1521-condo"];

export const metadata = {
  title: "1521 Residence | Lockhart Suver",
  description: "1521 Residence project details, collaborators, and full gallery.",
};

export default function CondoPage() {
  return <PortfolioProjectTemplate project={project} />;
}
