import React from "react";

export default function Noise() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] dark:opacity-[0.09]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='220' height='220' filter='url(%23n)' opacity='0.35'/></svg>\")",
      }}
    />
  );
}
