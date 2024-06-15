import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    deliciousHamburgers: {
      size: "30px",
      color: "#000",
      colorActive: "#fff",
      colorLight: "#fff",
      padding: "0px",
      animationSpeed: 1,
      barSpacing: "9px",
    },
    extend: {
      colors: {
        orange: "#EC5733",
        "grey-20": "#F7F7F7",
        "grey-40": "#747474",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-delicious-hamburgers"),
  ],
} satisfies Config;

export default config;
