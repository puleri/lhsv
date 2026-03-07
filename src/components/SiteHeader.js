"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "/portfolio/projects-2/",
    children: [
      {
        label: "New Homes",
        href: "/portfolio/new_homes/",
        scrollableSubmenu: true,
        children: [
          { label: "The Bluff", href: "/portfolio/the-bluff/" },
          { label: "Dorothy’s House", href: "/portfolio/dorothys-house/" },
          { label: "508 Residence", href: "/portfolio/508-residence/" },
          { label: "Southpaw Residence", href: "/portfolio/southpaw-residence/" },
          { label: "The Ranch", href: "/portfolio/the-ranch/" },
          { label: "Pole Pass Cabin", href: "/portfolio/pole-pass-cabin/" },
          { label: "DMG Residence", href: "/portfolio/dmg-residence/" },
          { label: "Mercer Island Residence", href: "/portfolio/mercer-island-residence/" },
          { label: "Arrow Bay", href: "/portfolio/arrow-bay/" },
          { label: "Beans-Bight Residence", href: "/portfolio/beans-bight-residence/" },
          { label: "Union Bay Residence", href: "/portfolio/union-bay-residence/" },
          { label: "The Perch", href: "/portfolio/the-perch/" },
          { label: "Madison Park Residence", href: "/portfolio/madison-park/" },
          { label: "The Cottage", href: "/portfolio/the-cottage/" },
          { label: "Longhouse Residence", href: "/portfolio/longhouse-residence/" },
          { label: "Bellevue Residence", href: "/portfolio/laing-residence/" },
          { label: "Stone House", href: "/portfolio/stone-house/" },
          { label: "Beans View", href: "/portfolio/beans-view/" },
          { label: "Yarrow Point Residence", href: "/portfolio/yarrow-point-residence/" },
          { label: "Phantom Lake Residence", href: "/portfolio/phantom-lake-residence/" },
          { label: "Phantom Lake Studio", href: "/portfolio/phantom-lake-studio/" },
          { label: "Medina Residence", href: "/portfolio/obot-residence/" },
        ],
      },
      {
        label: "Downtown Condos",
        href: "/portfolio/downtown-condos/",
        children: [
          { label: "Four Seasons Penthouse", href: "/portfolio/four-seasons-penthouse/" },
          { label: "Bruno Residence", href: "/portfolio/bruno-residence/" },
          { label: "Pioneer Square Residence", href: "/portfolio/pioneer-square-residence/" },
          { label: "1521 Residence", href: "/portfolio/1521-condo/" },
          { label: "Big Star Belltown", href: "/portfolio/big-star-belltown/" },
          { label: "First Hill Penthouse", href: "/portfolio/first-hill-penthouse/" },
          { label: "Carillon Point Residence", href: "/portfolio/carillon-point-residence/" },
        ],
      },
      {
        label: "Remodels and Renovations",
        href: "/portfolio/remodels-and-renovations/",
        children: [
          { label: "Restoration Point Residence", href: "/portfolio/restoration-point-residence/" },
          { label: "Light House Residence", href: "/portfolio/light-house-residence/" },
          { label: "Queen Anne Residence", href: "/portfolio/queen-anne-residence-2/" },
          { label: "Waverly Residence", href: "/portfolio/waverly-residence/" },
          { label: "601 Residence", href: "/portfolio/601-residence/" },
          { label: "Capitol Hill Arts and Crafts Home", href: "/portfolio/capitol-hill-arts-and-crafts-home/" },
          { label: "Edmonds Waterfront Residence", href: "/portfolio/edmonds-waterfront-residence/" },
          { label: "Classic Seattle", href: "/portfolio/classic-seattle/" },
          { label: "Tumble Creek Residence", href: "/portfolio/tumble-creek-residence/" },
          { label: "Laurelhurst Kitchen", href: "/portfolio/laurelhurst-kitchen/" },
          { label: "Zen House", href: "/portfolio/zen-house/" },
          { label: "Capitol Hill Kitchen", href: "/portfolio/capitol-hill-kitchen/" },
        ],
      },
      {
        label: "Small Projects",
        href: "/portfolio/small-projects/",
        children: [
          { label: "Madison Park Residence Remodel", href: "/portfolio/madison-park-residence-remodel/" },
          { label: "Queen Anne Bathroom", href: "/portfolio/queen-anne-bathroom/" },
          { label: "Denny-Blaine Residence", href: "/portfolio/denny-blaine/" },
          { label: "Madrona Residence", href: "/portfolio/madrona-residence/" },
          { label: "Windermere Arbors", href: "/portfolio/windermere-arbors/" },
          { label: "Washington Park Residence", href: "/portfolio/washington-park-residence/" },
        ],
      },
      { label: "Commercial", href: "/commercial/" },
    ],
  },
  { label: "Firm Profile", href: "/about-us/" },
  {
    label: "Home Service",
    href: "/home-service-2/",
    children: [
      { label: "Home Service", href: "/home-service/" },
      { label: "About Home Service", href: "/about-home-service/" },
      { label: "Our Commitment", href: "/our-commitment/" },
      { label: "Small Projects and Repairs", href: "/small-projects-and-repairs/" },
      { label: "Ongoing Maintenance", href: "/ongoing-maintenance/" },
      { label: "Remodels", href: "/remodels/" },
    ],
  },
  { label: "Contact", href: "/remodels/contact-2/" },
];

const SHRINK_SCROLL_THRESHOLD = 120;
const GROW_SCROLL_THRESHOLD = 8;

function isActivePath(pathname, href) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href);
}

function NavItem({ item, pathname }) {
  const hasChildren = Boolean(item.children?.length);
  const isActive = isActivePath(pathname, item.href);

  return (
    <li className={`nav-item${hasChildren ? " has-children" : ""}`}>
      <Link className={isActive ? "active" : ""} href={item.href}>
        {item.label}
      </Link>
      {hasChildren ? (
        <ul className={`sub-menu${item.scrollableSubmenu ? " sub-menu-scrollable" : ""}`}>
          {item.children.map((child) => (
            <NavItem key={`${item.label}-${child.label}`} item={child} pathname={pathname} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

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

  const links = useMemo(() => navItems, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="Lockhart Suver Home">
          <img src="/wp-content/uploads/2014/02/LSlogo2.png" alt="Lockhart Suver" />
        </Link>

        <nav aria-label="Primary">
          <ul className="main-nav">
            {links.map((item) => (
              <NavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
