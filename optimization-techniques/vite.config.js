//million js improves performance (speeds up) of the app

import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
});