import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

export const metadata = {
  title: "Home | Lockhart Suver",
  description:
    "Craftsmanship in every detail. Lockhart Suver specializes in homes, interiors, and built environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased site-shell">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
