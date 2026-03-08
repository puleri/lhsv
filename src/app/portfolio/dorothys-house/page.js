import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["dorothys-house"];

export const metadata = {
  title: "Dorothy's House | Lockhart Suver",
  description: "Dorothy's House project details, collaborators, and full gallery.",
};

export default function DorothysHousePage() {
  return <PortfolioProjectTemplate project={project} />;
}
