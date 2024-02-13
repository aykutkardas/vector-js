/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    typecheck: {
      include: ["**/*.test-d.ts"],
      only: true,
    },
  },
})
