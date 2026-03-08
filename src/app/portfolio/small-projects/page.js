import PortfolioCategoryTemplate from "@/components/PortfolioCategoryTemplate";
import smallProjectsPortfolioItems from "../_data/smallProjectsPortfolioItems";

export const metadata = {
  title: "Small Projects | Lockhart Suver",
  description: "Small projects portfolio index for Lockhart Suver.",
};

export default function SmallProjectsPage() {
  return (
    <PortfolioCategoryTemplate
      title="Small Projects"
      items={smallProjectsPortfolioItems}
      previousHref="/portfolio/remodels-and-renovations/"
      nextHref="/portfolio/queen-anne-bathroom/"
    />
  );
}
