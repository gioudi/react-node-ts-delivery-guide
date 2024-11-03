import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist/*", "**/node_modules/*"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.commonjs,
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "no-var": "error",
        "no-empty": "off",
        semi: "error",

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "prefer-const": "error",
    },
}];