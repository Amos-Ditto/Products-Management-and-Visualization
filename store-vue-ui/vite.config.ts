import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "@unocss/vite"
import presetIcons from "@unocss/preset-icons"

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetIcons({})
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
