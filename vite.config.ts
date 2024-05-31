import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: "~", replacement: fileURLToPath(new URL("./src", import.meta.url)) }],
    },
    plugins: [
        UnoCSS(),
        react(),
    ],
});
