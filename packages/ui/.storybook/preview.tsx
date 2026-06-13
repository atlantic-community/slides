import type { Preview } from "@storybook/react-vite";

// Self-hosted brand fonts (shared entry, also used by the player app).
import "../src/fonts";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#000" },
      },
    },
    initialGlobals: {
      backgrounds: { value: "dark" },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Foundations", "Layouts", "Components", "Player"],
      },
    },
  },
};

export default preview;
