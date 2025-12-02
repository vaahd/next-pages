"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const animatedEls: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".reveal, .parallax-fade"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}