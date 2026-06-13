import { config } from "@atlantic-community-slides/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config[]} */
export default [{ ignores: ["dist/**"] }, ...config];
