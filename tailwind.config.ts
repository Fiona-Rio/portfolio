import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                scrollX: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                scrollY: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-100%)" },
                },
            },
            animation: {
                scrollX: "scrollX var(--duration) linear infinite",
                scrollY: "scrollY var(--duration) linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
