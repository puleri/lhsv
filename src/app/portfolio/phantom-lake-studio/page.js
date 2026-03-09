import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["phantom-lake-studio"];

export const metadata = {
  title: "Phantom Lake Studio | Lockhart Suver",
  description: "Phantom Lake Studio project details, collaborators, and full gallery.",
};

export default function PhantomLakeStudioPage() {
  return <PortfolioProjectTemplate project={project} />;
}
