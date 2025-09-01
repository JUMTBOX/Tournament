import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: { extend: {} },
  plugins: [animate],
} satisfies Config;
