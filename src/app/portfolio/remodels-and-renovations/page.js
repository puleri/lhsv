import PortfolioCategoryTemplate from "@/components/PortfolioCategoryTemplate";
import remodelsAndRenovationsPortfolioItems from "../_data/remodelsAndRenovationsPortfolioItems";

export const metadata = {
  title: "Remodels and Renovations | Lockhart Suver",
  description: "Remodels and renovations portfolio index for Lockhart Suver.",
};

export default function RemodelsAndRenovationsPage() {
  return (
    <PortfolioCategoryTemplate
      title="Remodels and Renovations"
      items={remodelsAndRenovationsPortfolioItems}
      previousHref="/portfolio/downtown-condos/"
      nextHref="/portfolio/restoration-point-residence/"
    />
  );
}
