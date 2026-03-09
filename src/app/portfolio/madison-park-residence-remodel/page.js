import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["madison-park-residence-remodel"];

export const metadata = {
  title: "Madison Park Residence Remodel | Lockhart Suver",
  description: "Madison Park Residence Remodel project details, collaborators, and full gallery.",
};

export default function MadisonParkResidenceRemodelPage() {
  return <PortfolioProjectTemplate project={project} />;
}
