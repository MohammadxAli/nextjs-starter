/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        // Make tailwind breakpoints same as bootstrap
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1500px",
        },
        fontFamily: {
            sans: "IRANSansWeb, sans-serif",
            serif: "IRANYekanWeb, sans-serif",
        },
        container: (theme) => ({
            center: true,
            padding: theme("spacing.4"),
        }),
        extend: {
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
                "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
                "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-logical"),
    ],
};
