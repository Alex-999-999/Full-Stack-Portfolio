import { createFileRoute } from "@tanstack/react-router";

import Work from "@/pages/Work";
import type { WorkCategory } from "@/lib/workServices";

function parseWorkTab(search: Record<string, unknown>): WorkCategory {
  return search.tab === "mobile" ? "mobile" : "web";
}

export const Route = createFileRoute("/work/")({
  validateSearch: (search: Record<string, unknown>) => ({
    tab: parseWorkTab(search),
  }),
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
