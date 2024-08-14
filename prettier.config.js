/** @type {import("prettier").Config} */
module.exports = {
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    // eslint-disable-next-line no-undef
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};


