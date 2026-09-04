import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          blue: "#00b4ff",
          cyan: "#00e5ff",
          purple: "#7c3aed",
          dark: "#03060d",
          darker: "#070c18",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-xl": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.45", fontWeight: "500" }],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #00b4ff 0%, #00e5ff 50%, #7c3aed 100%)",
        "gradient-blue": "linear-gradient(135deg, #00b4ff 0%, #0066ff 100%)",
        "gradient-dark": "linear-gradient(180deg, #03060d 0%, #070c18 100%)",
        "grid-pattern": "linear-gradient(rgba(0, 180, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 180, 255, 0.04) 1px, transparent 1px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        spin: "spin 1s linear infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 180, 255, 0.3), 0 0 60px rgba(0, 180, 255, 0.1)",
        "glow-cyan": "0 0 20px rgba(0, 229, 255, 0.3), 0 0 60px rgba(0, 229, 255, 0.1)",
        "card-hover": "0 0 20px rgba(0, 180, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
