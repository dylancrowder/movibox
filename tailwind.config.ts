import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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

        // Primario - Azul Movibox
        primary: {
          50:  "#f0f4f9",
          100: "#d9e8f5",
          200: "#b3d0eb",
          300: "#8db9e1",
          400: "#6da2d7",
          500: "#4d8bcd",
          600: "#2d5a8f",
          700: "#1e3a5f",
          800: "#152947",
          900: "#0c1929",
          950: "#050d16",
          DEFAULT: "#1e3a5f",
          foreground: "#ffffff",
        },

        // Secundario - Naranja Movibox
        secondary: {
          50:  "#fff7e6",
          100: "#ffe0b2",
          200: "#ffc866",
          300: "#ffb03d",
          400: "#ff9800",
          500: "#ff8a00",
          600: "#e68900",
          700: "#cc7700",
          800: "#b26600",
          900: "#805200",
          950: "#663d00",
          DEFAULT: "#ff9800",
          foreground: "#ffffff",
        },

        // WhatsApp Verde
        whatsapp: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#25d366",
          600: "#1da852",
          700: "#15803d",
          800: "#166534",
          900: "#0d5635",
          950: "#052e16",
          DEFAULT: "#25d366",
          foreground: "#ffffff",
        },

        // Grises Neutrales
        neutral: {
          50:  "#fafafa",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#0a0e27",
          950: "#030612",
        },

        // Estados
        success: "#4caf50",
        warning: "#ffc107",
        error:   "#f44336",
        info:    "#2196f3",

        // Legacy brand colors (kept for backward compatibility)
        brand: {
          DEFAULT: "#1e3a5f",
          deep: "#1e3a5f",
          bright: "#ff9800",
          orange: "#ff9800",
          darkblue: "#1e3a5f",
          lightblue: "#2d5a8f",
          graphite: "#4a5568",
          industrial: "#2d3748",
          metallic: "#718096",
          soft: "#f0f4f9",
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

      spacing: {
        0:   "0px",
        1:   "4px",
        2:   "8px",
        3:   "12px",
        4:   "16px",
        6:   "24px",
        8:   "32px",
        12:  "48px",
        16:  "64px",
      },

      borderRadius: {
        micro: "2px",
        xs:    "4px",
        sm:    "8px",
        md:    "12px",
        lg:    "16px",
        full:  "9999px",
      },

      fontSize: {
        "h1-desktop": ["60px", { lineHeight: "1.1", fontWeight: "900" }],
        "h1-tablet":  ["48px", { lineHeight: "1.1", fontWeight: "900" }],
        "h1-mobile":  ["36px", { lineHeight: "1.1", fontWeight: "900" }],

        "h2-desktop": ["48px", { lineHeight: "1.2", fontWeight: "800" }],
        "h2-tablet":  ["40px", { lineHeight: "1.2", fontWeight: "800" }],
        "h2-mobile":  ["28px", { lineHeight: "1.2", fontWeight: "800" }],

        "h3-desktop": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "h3-tablet":  ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        "h3-mobile":  ["24px", { lineHeight: "1.2", fontWeight: "700" }],

        "h4-desktop": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "h4-tablet":  ["20px", { lineHeight: "1.3", fontWeight: "700" }],
        "h4-mobile":  ["18px", { lineHeight: "1.3", fontWeight: "700" }],

        "body-desktop": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-tablet":  ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile":  ["14px", { lineHeight: "1.6", fontWeight: "400" }],

        "small-desktop": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "small-tablet":  ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "small-mobile":  ["12px", { lineHeight: "1.5", fontWeight: "400" }],
      },

      boxShadow: {
        card: "0 1px 3px rgba(30, 58, 95, 0.12)",
        "card-hover": "0 4px 12px rgba(30, 58, 95, 0.15)",
        modal: "0 20px 40px rgba(30, 58, 95, 0.25)",
        "input-focus": "0 0 0 3px rgba(255, 152, 0, 0.1)",
      },

      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
