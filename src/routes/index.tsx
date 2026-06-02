import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "En Zuo" },
      {
        name: "description",
        content:
          "En Zuo — Shopify ecommerce developer portfolio showcasing custom storefronts, product UX, and conversion-focused online stores.",
      },
      { property: "og:title", content: "En Zuo" },
      {
        property: "og:description",
        content: "Shopify ecommerce developer portfolio by En Zuo.",
      },
    ],
  }),
  component: Index,
});
