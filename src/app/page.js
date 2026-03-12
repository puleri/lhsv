"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const projectSections = [
  {
    title: "New Homes",
    href: "/portfolio/new_homes/",
    cta: "view the new homes portfolio",
    image: "/wp-content/uploads/2015/12/508feature-min.jpg",
    light: true,
  },
  {
    title: "Downtown Condos",
    href: "/portfolio/downtown-condos/",
    cta: "view the downtown condos portfolio",
    image: "/wp-content/uploads/2015/12/bruno_reduced.jpg",
    light: true,
  },
  {
    title: "Remodels and Renovations",
    href: "/portfolio/remodels-and-renovations/",
    cta: "view the remodels and renovations portfolio",
    image: "/wp-content/uploads/2015/12/601_reduced.jpg",
    light: true,
  },
  {
    title: "Small Projects",
    href: "/portfolio/small-projects/",
    cta: "view the small projects portfolio",
    image: "/wp-content/uploads/2015/12/smallprojects_reduced.jpg",
    light: true,
  },
  {
    title: "Commercial",
    href: "/commercial/",
    cta: "commercial portfolio under construction",
    image: "/wp-content/uploads/2015/12/home5_reduced.jpg",
    light: true,
  },
];

const heroSlides = [
  {
    image: "/wp-content/uploads/2014/02/home1.jpg",
    alt: "Featured staircase",
  },
  {
    image: "/wp-content/uploads/2014/02/home2.jpg",
    alt: "Modern open living area",
  },
  {
    image: "/wp-content/uploads/2015/12/home3_reduced.jpg",
    alt: "Contemporary exterior with landscaped entry",
  },
  {
    image: "/wp-content/uploads/2014/02/home6.jpg",
    alt: "Warm kitchen and dining space",
  },
  {
    image: "/wp-content/uploads/2015/12/home5_reduced.jpg",
    alt: "Detailed interior finish and lighting",
  },
  {
    image: "/wp-content/uploads/2014/02/home4.jpg",
    alt: "Outdoor patio with architectural overhang",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [transitionDirection, setTransitionDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef(null);

  const goToSlide = useCallback(
    (nextSlide) => {
      if (nextSlide === currentSlide) {
        return;
      }

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      const isWrappingToStart = currentSlide === heroSlides.length - 1 && nextSlide === 0;
      const isWrappingToEnd = currentSlide === 0 && nextSlide === heroSlides.length - 1;
      const direction = isWrappingToStart || (!isWrappingToEnd && nextSlide > currentSlide) ? 1 : -1;

      setTransitionDirection(direction);
      setPreviousSlide(currentSlide);
      setCurrentSlide(nextSlide);
      setIsTransitioning(true);

      transitionTimeoutRef.current = setTimeout(() => {
        setPreviousSlide(null);
        setIsTransitioning(false);
        transitionTimeoutRef.current = null;
      }, 650);
    },
    [currentSlide],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 5500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
          <main className="home-grid-layout">
      <section className="hero" aria-label="Featured homes">
        {heroSlides.map((slide, i) => {
          const isCurrent = i === currentSlide;
          const isPrevious = i === previousSlide;
          const imageClasses = ["hero-image"];

          if (isCurrent && isTransitioning) {
            imageClasses.push("is-active");
            imageClasses.push(transitionDirection === 1 ? "enter-from-right" : "enter-from-left");
          } else if (isCurrent) {
            imageClasses.push("is-active");
          }

          if (isPrevious && isTransitioning) {
            imageClasses.push("is-leaving");
            imageClasses.push(transitionDirection === 1 ? "exit-to-left" : "exit-to-right");
          }

          const isInitialLcpImage = i === 0;

          return (
            <img
              key={slide.image}
              className={imageClasses.join(" ")}
              src={slide.image}
              alt={slide.alt}
              loading={isInitialLcpImage ? "eager" : "lazy"}
              fetchPriority={isInitialLcpImage ? "high" : "auto"}
            />
          );
        })}
        <img
          className="hero-watermark"
          src="/wp-content/uploads/2014/05/LSlogo91021495_shadow.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-dots">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.image}
              className={i === currentSlide ? "dot active" : "dot"}
              onClick={() => goToSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </section>

      <section className="intro-band" id="firm-profile">
        <div className="container intro-content">
          <h1 className="text-orange">Craftsmanship in every detail.</h1>
          <p className="font-semilight">
            We specialize in turning challenging architecture and one-of-a-kind designs into
            well-crafted homes, interiors and built environments.
          </p>
          <a className="font-medium" href="/about-us/">view the firm profile</a>
        </div>
      </section>

      <section id="projects" className="project-strips">
        {projectSections.map((section) => (
          <article key={section.title} className="project-strip h-100" style={{ backgroundImage: `url(${section.image})` }}>
            <div className="strip-overlay" />
            <div className={`container strip-content text-yellow  ${section.light ? "" : "text-normal"}`}>
              <h2 className="text-white">{section.title}</h2>
              <a href={section.href}>{section.cta}</a>
            </div>
          </article>
        ))}
      </section>

    </main>
          <section className="contact-band" id="contact">
        <div className="container contact-content">
          <a href="/remodels/contact-2">Please contact us for more information about building your next project.</a>
        </div>
      </section>

    </div>
  );
}
