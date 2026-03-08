import PortfolioCategoryTemplate from "@/components/PortfolioCategoryTemplate";
import downtownCondosPortfolioItems from "../_data/downtownCondosPortfolioItems";

export const metadata = {
  title: "Downtown Condos | Lockhart Suver",
  description: "Downtown condos portfolio index for Lockhart Suver.",
};

export default function DowntownCondosPage() {
  return (
    <PortfolioCategoryTemplate
      title="Downtown Condos"
      items={downtownCondosPortfolioItems}
      previousHref="/portfolio/new_homes/"
      nextHref="/portfolio/four-seasons-penthouse/"
    />
  );
}
