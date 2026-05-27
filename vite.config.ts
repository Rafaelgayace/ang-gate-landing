import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Força o Nitro a rodar fora do ambiente Lovable (ex: build no Cloudflare Pages)
  nitro: {
    preset: "cloudflare_pages",
  },
});
