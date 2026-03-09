"use client";

import { useEffect, useState } from "react";

const SHOW_BUTTON_SCROLL_OFFSET = 300;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_BUTTON_SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-button${isVisible ? " is-visible" : ""}`}
      aria-label="Scroll to top"
      onClick={handleClick}
    >
      <span className="scroll-to-top-chevron" aria-hidden="true" />
    </button>
  );
}
