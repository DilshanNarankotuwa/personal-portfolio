import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export default function CountUp({
  to = 0,
  duration = 1.2,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  once = true,
}) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (once && started) return;
        setStarted(true);

        const controls = animate(0, to, {
          duration,
          delay,
          ease: "easeOut",
          onUpdate(value) {
            el.textContent =
              prefix + Number(value).toFixed(decimals) + suffix;
          },
        });

        return () => controls.stop();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, delay, suffix, prefix, decimals, once, started]);

  return <span ref={ref}>{prefix + "0" + suffix}</span>;
}
