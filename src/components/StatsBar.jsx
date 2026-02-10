import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp.jsx";
import SpotlightCard from "./SpotlightCard.jsx";

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 150, suffix: "+", label: "Contributions" },
];

export default function StatsBar() {
  return (
    <section className="container-pad py-10 sm:py-14 mt-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <SpotlightCard
              className="relative rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]
                         px-7 py-8 text-center overflow-hidden
                         min-h-[180px] sm:min-h-[200px]
                         flex flex-col items-center justify-center
                         transition-transform duration-300
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgba(62,124,255,0.16)]"
            >
              {/* premium top shine */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[140%] -translate-x-1/2 rotate-6 opacity-60"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(112,168,255,0.10), transparent)",
                }}
              />

              <div className="relative z-10">
                {/* BIG number */}
                <div className="text-6xl sm:text-7xl font-semibold tracking-tight leading-none">
                  <span className="bg-gradient-to-b from-[rgb(var(--fg))] to-[rgb(var(--muted))] bg-clip-text text-transparent">
                    <CountUp
                      to={s.value}
                      suffix={s.suffix}
                      duration={1.35}
                      delay={0.06 * i}
                    />
                  </span>
                </div>

                {/* label bigger & cleaner */}
                <div className="mt-4 text-base sm:text-lg font-medium text-[rgb(var(--muted))]">
                  {s.label}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
