import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["madison-park"];

export const metadata = {
  title: "Madison Park | Lockhart Suver",
  description: "Madison Park project details, collaborators, and full gallery.",
};

export default function MadisonParkPage() {
  return <PortfolioProjectTemplate project={project} />;
}
