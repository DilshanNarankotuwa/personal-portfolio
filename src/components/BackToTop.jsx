import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // ✅ Use Lenis if available (prevents scroll conflict)
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollToTop();
      }}
      aria-label="Back to top"
      className="
        fixed
        bottom-5 right-5 sm:bottom-8 sm:right-8
        w-12 h-12
        rounded-full
        flex items-center justify-center
        z-[999999]
        cursor-pointer
        select-none
        touch-manipulation

        bg-sky-500
        text-white
        shadow-lg shadow-sky-500/40

        transition-all duration-200
        hover:bg-sky-600
        hover:scale-105
        active:scale-95
      "
    >
      ↑
    </button>
  );
}
