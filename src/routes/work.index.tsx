import { createFileRoute } from "@tanstack/react-router";
import Work from "@/pages/Work";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — En Zuo" },
      {
        name: "description",
        content:
          "Shopify ecommerce projects by EN ZUO — custom storefronts built for product clarity, responsive design, and conversion-focused shopping experiences.",
      },
      { property: "og:title", content: "Work — En Zuo" },
      {
        property: "og:description",
        content:
          "Selected Shopify ecommerce stores and projects by EN ZUO.",
      },
    ],
  }),
  component: Work,
});
