module.exports = {
  root: true,
  env: { node: true },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "warn",
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": "off",
  },
};
