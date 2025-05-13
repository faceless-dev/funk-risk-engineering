/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
        'noto-sans': ['"Noto Sans"', 'sans'],
      },
      colors: {
        'p-endeavour-blue': 'hsl(211, 100%, 29%)',
        'p-lima-green': 'hsl(104, 77%, 44%)',
        'p-chelsea-green': 'hsl(79, 56%, 50%)',
        's-schrift': 'hsl(60, 1%, 23%)',
        's-tradewind': 'hsl(171, 42%, 58%)',
        's-blue-chill': 'hsl(180, 82%, 33%)',
        's-eucalyptus': 'hsl(159, 46%, 32%)',
        's-blue-lagoon': 'hsl(191, 100%, 25%)',
        's-wedgewood': 'hsl(206, 33%, 49%)',
        's-havelock-blue': 'hsl(209, 60%, 61%)',
        's-donkey-brown': 'hsl(33, 20%, 58%)',
        's-medium-red-violet': 'hsl(322, 53%, 49%)',
        's-lipstick': 'hsl(330, 100%, 34%)',
        's-gray': 'hsl(0, 0%, 50%)',
        's-silver': 'hsl(0, 0%, 75%)',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

