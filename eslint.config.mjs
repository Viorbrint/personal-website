import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  eslintPluginPrettierRecommended,
];
