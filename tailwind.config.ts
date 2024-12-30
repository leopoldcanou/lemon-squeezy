import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-black": "hsl(var(--primary-black))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "circular-pro-book": [
          "var(--font-circular-pro-book)",
          {
            fontFeatureSettings: "'ss04'",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
