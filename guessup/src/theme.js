import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  preflight: false,
  disableAnimations: true,
  globalCss: {
    body: {
      bg: "unset",
      color: "unset",
      fontFamily: "unset",
    },
  },
});

export const theme = createSystem(defaultConfig, customConfig);
