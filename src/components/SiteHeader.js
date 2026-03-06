"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Firm Profile", href: "/about-us/" },
  { label: "Home Service", href: "/home-services/" },
  { label: "Contact", href: "/remodels/contact-2" },
];

const SHRINK_SCROLL_THRESHOLD = 80;
const GROW_SCROLL_THRESHOLD = SHRINK_SCROLL_THRESHOLD - 30;

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled((previousIsScrolled) => {
        if (!previousIsScrolled && scrollY >= SHRINK_SCROLL_THRESHOLD) {
          return true;
        }

        if (previousIsScrolled && scrollY <= GROW_SCROLL_THRESHOLD) {
          return false;
        }

        return previousIsScrolled;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = useMemo(
    () =>
      navLinks.map((link) => {
        const isHome = link.href === "/";
        const isProjects = link.href === "/#projects";
        const isActive = isHome ? pathname === "/" : isProjects ? pathname === "/" : pathname === link.href;

        return { ...link, isActive };
      }),
    [pathname],
  );

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="Lockhart Suver Home">
          <img src="/wp-content/uploads/2014/02/LSlogo2.png" alt="Lockhart Suver" />
        </Link>

        <nav aria-label="Primary">
          <ul className="main-nav">
            {links.map((link) => (
              <li key={link.label}>
                <Link className={link.isActive ? "active" : ""} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
