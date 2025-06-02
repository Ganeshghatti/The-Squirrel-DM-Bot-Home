import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        // Headline 1
        "h1-regular": ["64px", { fontWeight: "400" }],
        "h1-medium": ["64px", { fontWeight: "500" }],
        "h1-semibold": ["64px", { fontWeight: "600" }],
        // Headline 2
        "h2-regular": ["48px", { fontWeight: "400" }],
        "h2-medium": ["48px", { fontWeight: "500" }],
        "h2-semibold": ["48px", { fontWeight: "600" }],
        // Headline 3
        "h3-regular": ["32px", { fontWeight: "400" }],
        "h3-medium": ["32px", { fontWeight: "500" }],
        "h3-semibold": ["32px", { fontWeight: "600" }],
        // Headline 4
        "h4-regular": ["24px", { fontWeight: "400" }],
        "h4-medium": ["24px", { fontWeight: "500" }],
        "h4-semibold": ["24px", { fontWeight: "600" }],
        // Headline 5
        "h5-regular": ["20px", { fontWeight: "400" }],
        "h5-medium": ["20px", { fontWeight: "500" }],
        "h5-semibold": ["20px", { fontWeight: "600" }],

        // Extra Large
        "body-xl-regular": ["18px", { fontWeight: "400" }],
        "body-xl-medium": ["18px", { fontWeight: "500" }],
        "body-xl-semibold": ["18px", { fontWeight: "600" }],

        // Large
        "body-lg-regular": ["16px", { fontWeight: "400" }],
        "body-lg-medium": ["16px", { fontWeight: "500" }],
        "body-lg-semibold": ["16px", { fontWeight: "600" }],

        // Medium
        "body-md-regular": ["14px", { fontWeight: "400" }],
        "body-md-medium": ["14px", { fontWeight: "500" }],
        "body-md-semibold": ["14px", { fontWeight: "600" }],

        // Small
        "body-sm-regular": ["12px", { fontWeight: "400" }],
        "body-sm-medium": ["12px", { fontWeight: "500" }],
        "body-sm-semibold": ["12px", { fontWeight: "600" }],

        // Extra Small
        "body-xs-regular": ["10px", { fontWeight: "400" }],
        "body-xs-medium": ["10px", { fontWeight: "500" }],
        "body-xs-semibold": ["10px", { fontWeight: "600" }],
      },
    },
  },
plugins: [tailwindcssAnimate],
};
export default config;
