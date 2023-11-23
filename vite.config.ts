/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		css: false,
		globals: true, // dont' need to import describe everytime
		setupFiles: ["./test/setup.ts"],
		environment: "jsdom",
	},
});
