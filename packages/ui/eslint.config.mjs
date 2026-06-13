// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config } from "@atlantic-community-slides/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: ["storybook-static/**", "coverage/**"] },
  ...config,
  ...storybook.configs["flat/recommended"],
];
