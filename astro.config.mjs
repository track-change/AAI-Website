import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "jy6yg9wb",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
  ],
});
