import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // @metamask/connect-stellar (pulled in by the JSR build of the wallets kit)
      // imports `ModuleType` from the npm name "@creit.tech/stellar-wallets-kit",
      // which isn't installed. Point it at the JSR copy we already have.
      {
        find: /^@creit\.tech\/stellar-wallets-kit$/,
        replacement: "@creit-tech/stellar-wallets-kit/types",
      },
    ],
  },
  server: {
    host: "127.0.0.1",
    port: 4173,
  },
});
