import { defineConfig } from "vite";

const srcPath = "src";

export default defineConfig({
    root: srcPath,
    server: {
        port: 3000,
    },
});