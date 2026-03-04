"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Projects", href: "#projects" },
  { label: "Firm Profile", href: "https://lsdev1.wpengine.com/about-us/" },
  { label: "Home Service", href: "https://lsdev1.wpengine.com/home-services/" },
  { label: "Contact", href: "https://lsdev1.wpengine.com/contact/" },
];

const projectSections = [
  {
    title: "New Homes",
    href: "https://lsdev1.wpengine.com/portfolio/new_homes/",
    cta: "view the new homes portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/508feature-min.jpg",
    light: true,
  },
  {
    title: "Downtown Condos",
    href: "https://lsdev1.wpengine.com/portfolio/downtown-condos/",
    cta: "view the downtown condos portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/bruno_reduced.jpg",
    light: true,
  },
  {
    title: "Remodels and Renovations",
    href: "https://lsdev1.wpengine.com/portfolio/remodels-and-renovations/",
    cta: "view the remodels and renovations portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/601_reduced.jpg",
    light: true,
  },
  {
    title: "Small Projects",
    href: "https://lsdev1.wpengine.com/portfolio/small-projects/",
    cta: "view the small projects portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/smallprojects_reduced.jpg",
    light: true,
  },
  {
    title: "Commercial",
    href: "https://lsdev1.wpengine.com/commercial/",
    cta: "commercial portfolio under construction",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home5_reduced.jpg",
    light: true,
  },
];

const heroSlides = [
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home1.jpg",
    alt: "Featured staircase",
  },
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home2.jpg",
    alt: "Modern open living area",
  },
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home3_reduced.jpg",
    alt: "Contemporary exterior with landscaped entry",
  },
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home6.jpg",
    alt: "Warm kitchen and dining space",
  },
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home5_reduced.jpg",
    alt: "Detailed interior finish and lighting",
  },
  {
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home4.jpg",
    alt: "Outdoor patio with architectural overhang",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = heroSlides[currentSlide];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  return (
    <div className="homepage">
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="Lockhart Suver Home">
            <img
              src="https://lsdev1.wpengine.com/wp-content/uploads/2014/02/LSlogo2.png"
              alt="Lockhart Suver"
            />
          </Link>

          <nav aria-label="Primary">
            <ul className="main-nav">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link className={link.active ? "active" : ""} href={link.href}>
                      {link.label}
                    </Link>
                  ) : (
                    <a className={link.active ? "active" : ""} href={link.href}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Featured homes">
          <img
            key={activeSlide.image}
            className="hero-image is-active"
            src={activeSlide.image}
            alt={activeSlide.alt}
          />
          <img
            className="hero-watermark"
            src="https://www.lockhartsuver.com/wp-content/uploads/2014/05/LSlogo91021495_shadow.png"
            alt=""
            aria-hidden="true"
          />
          <div className="hero-dots">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                className={i === currentSlide ? "dot active" : "dot"}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Show slide ${i + 1}`}
                type="button"
              />
            ))}
          </div>
        </section>

        <section className="intro-band" id="firm-profile">
          <div className="container intro-content">
            <h1>Craftsmanship in every detail.</h1>
            <p>
              We specialize in turning challenging architecture and one-of-a-kind designs into
              well-crafted homes, interiors and built environments.
            </p>
            <a href="https://lsdev1.wpengine.com/about-us/">view the firm profile</a>
          </div>
        </section>

        <section id="projects" className="project-strips">
          {projectSections.map((section) => (
            <article key={section.title} className="project-strip h-100" style={{ backgroundImage: `url(${section.image})` }}>
              <div className="strip-overlay" />
              <div className={`container strip-content ${section.light ? "text-light" : "text-normal"}`}>
                <h2>{section.title}</h2>
                <a href={section.href}>{section.cta}</a>
              </div>
            </article>
          ))}
        </section>

        <section className="contact-band" id="contact">
          <a href="https://lsdev1.wpengine.com/contact/">
            Please contact us for more information about building your next project.
          </a>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© 2007 — 2026 Lockhart Suver LLC</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/lockhartsuverllc" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lockhartsuver/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
