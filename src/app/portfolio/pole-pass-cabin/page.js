import PortfolioProjectTemplate from "@/components/PortfolioProjectTemplate";
import portfolioProjectPages from "../_data/portfolioProjectPages";

const project = portfolioProjectPages["pole-pass-cabin"];

export const metadata = {
  title: "Pole Pass Cabin | Lockhart Suver",
  description: "Pole Pass Cabin project details, collaborators, and full gallery.",
};

export default function PolePassCabinPage() {
  return <PortfolioProjectTemplate project={project} />;
}
