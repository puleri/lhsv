import "./globals.css";

export const metadata = {
  title: "Home | Lockhart Suver",
  description:
    "Craftsmanship in every detail. Lockhart Suver specializes in homes, interiors, and built environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
