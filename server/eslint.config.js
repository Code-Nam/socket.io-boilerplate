import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, prettierConfig, {
    plugins: {
        prettier: prettierPlugin,
    },
    rules: {
        "prettier/prettier": "warn",
    },
});
