import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#src/components": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/components",
      ),
      "#src/constants": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/constants",
      ),
      "#src/store": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/store",
      ),
      "#src/hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
      "src/#windows": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/windows",
      ),
    },
  },
});
