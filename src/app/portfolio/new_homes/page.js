import PortfolioCategoryTemplate from "@/components/PortfolioCategoryTemplate";
import newHomesPortfolioItems from "../_data/newHomesPortfolioItems";

export const metadata = {
  title: "New Homes | Lockhart Suver",
  description: "New homes portfolio index for Lockhart Suver.",
};

export default function NewHomesPage() {
  return (
    <PortfolioCategoryTemplate
      title="New Homes"
      items={newHomesPortfolioItems}
      previousHref="/portfolio/projects-2/"
      nextHref="/portfolio/magnolia-residence/"
    />
  );
}
