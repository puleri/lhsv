import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["phantom-lake-residence"];

export const metadata = {
  title: "Phantom Lake Residence | Lockhart Suver",
  description: "Phantom Lake Residence project details, collaborators, and full gallery.",
};

export default function PhantomLakeResidencePage() {
  return <PortfolioProjectTemplate project={project} />;
}