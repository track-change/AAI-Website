import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "4e5m3wpi",
      dataset: "development",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
  ],
});
