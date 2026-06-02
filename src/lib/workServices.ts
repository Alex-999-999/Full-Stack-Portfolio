/** Loads preview.png from each subfolder under src/assets/Works/ */
const WORK_PREVIEW_BY_FOLDER = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>("@/assets/Works/*/preview.png", {
      eager: true,
      import: "default",
    }),
  )
    .map(([path, url]) => {
      const match = path.match(/\/Works\/([^/]+)\/preview\.png$/i);
      return match ? ([match[1], url] as const) : null;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null),
) as Record<string, string>;

/** Aspect ratio for project preview mockups (1448×1086). */
export const FULLSTACK_PREVIEW_ASPECT = "1448 / 1086";

export interface WorkService {
  number: string;
  slug: string;
  title: string;
  /** Short copy for the work listing grid. */
  description: string;
  /** Long-form copy for the project detail page only. Falls back to `description`. */
  pageDescription?: string;
  image: string;
  /** CSS aspect-ratio value; defaults to desktop preview ratio. */
  imageAspect?: string;
  /** External URL for the project page “Check out my work” link. */
  ctaUrl?: string;
}

function resolveWorkPreview(assetFolder: string): string {
  const fromFolder = WORK_PREVIEW_BY_FOLDER[assetFolder];
  if (fromFolder) return fromFolder;
  throw new Error(
    `Missing preview for "${assetFolder}". Add src/assets/Works/${assetFolder}/preview.png`,
  );
}

/** "Ningbo DYD HVAC & Appliance Parts Website" → "ningbo-dyd-hvac-appliance-parts-website" */
export function workProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type WorkServiceInput = Omit<WorkService, "slug" | "image"> & {
  slug?: string;
  /** Folder name under src/assets/Works/ (e.g. bonethome, perfexkitchen). */
  assetFolder: string;
};

function service(entry: WorkServiceInput): WorkService {
  const { assetFolder, ...rest } = entry;
  return {
    ...rest,
    image: resolveWorkPreview(assetFolder),
    slug: entry.slug ?? workProjectSlug(entry.title),
  };
}

export const WORK_SERVICES: WorkService[] = [
  service({
    number: "01",
    assetFolder: "dydin",
    title: "Ningbo DYD HVAC & Appliance Parts Website",
    description:
      "A full-stack B2B ecommerce website for Ningbo DYD Import and Export Co., Ltd., specializing in HVAC and aftermarket appliance parts — washing machine, dryer, refrigerator, oven, dishwasher, and microwave components. The platform highlights 20+ years of experience, product catalogs, services, and a dependable shopping experience.",
    pageDescription: `Ningbo DYD (dydin.com) was a full-stack web project I built for a Ningbo-based import and export company focused on HVAC and aftermarket appliance parts. The live site presents the brand promise "Durable. Yours. Dependable" and more than 20 years of professional experience supplying parts from washing machines and dryers to refrigerators, gas range ovens, dishwashers, and microwaves.

My work focused on designing and implementing a responsive frontend that makes a large industrial catalog easy to browse. The homepage and inner pages include product listings with pricing and minimum-order details, brand and service sections, blog content, about pages (our story, core values, reviews), FAQ and contact flows, newsletter signup, and standard ecommerce features such as login, registration, cart, and account tools. I paid close attention to clear category navigation, product card layout, trust messaging, and mobile-friendly structure so B2B buyers can quickly find the right replacement parts.

On the backend, I built a Python API layer connected to a PostgreSQL database to support dynamic product data, user accounts, cart state, and editorial content. This kept the catalog maintainable while supporting authenticated shopping flows and data-driven pages instead of relying on static markup alone.

The tech stack for this project was Next.js for the application framework and routing, Tailwind CSS for consistent utility-first styling and responsive UI, Python for server-side logic and APIs, and PostgreSQL for reliable relational data storage. Together, these tools delivered a fast, scalable platform that balances corporate credibility with practical parts sourcing and ecommerce functionality.

This project strengthened my experience building a full-stack industrial B2B website — combining Next.js frontend development, Tailwind-based UI implementation, Python backend architecture, and PostgreSQL-backed data modeling into one production-ready platform.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://dydin.com/",
  }),
  service({
    number: "02",
    assetFolder: "qbcosmetic",
    title: "Qianbang Group Cosmetics & Brand Consulting Website",
    description:
      "A full-stack corporate website for Guangzhou Qianbang Group (QB Cosmetic), an industry leader in cosmetics brand consulting, ODM/OEM services, and product development. The platform presents company credentials, product categories, factory capabilities, news, and a shopping experience for skincare and beauty catalog items.",
    pageDescription: `Qianbang Group (QB Cosmetic) was a full-stack web project I built for a Guangzhou-based cosmetics and brand consulting company with more than 20 years in biomedical, cosmetics, and medical device industries. The live site at qbcosmetic.com serves as both a corporate presence and a product-facing platform — introducing the group's R&D bases, supply-chain strength, ODM/OEM offering, and trust metrics such as mature formulas, registration certificates, and team scale.

My work focused on designing and implementing a responsive frontend that communicates the brand's authority clearly. The homepage and inner pages highlight company introduction, category browsing (facial cleansers, serums, sun care, moisturizers, and related product lines), factory imagery, corporate news, brand information, blog content, and standard ecommerce flows including login, registration, cart, and contact. I paid close attention to layout hierarchy, bilingual-ready structure, navigation, and readable presentation of dense B2B content so visitors can quickly understand services and explore products.

On the backend, I built a Node.js API layer connected to a PostgreSQL database to support dynamic content, user accounts, cart state, and structured product or editorial data. This allowed the marketing site to stay maintainable while still supporting authenticated flows and data-driven sections rather than hard-coding everything into static pages.

The tech stack for this project was Next.js for the application framework and routing, Tailwind CSS for consistent utility-first styling and responsive UI, Node.js for server-side logic and APIs, and PostgreSQL for reliable relational data storage. Together, these tools made it possible to deliver a fast, scalable site that balances corporate storytelling with practical ecommerce functionality.

This project strengthened my experience building a full-stack cosmetics industry website — combining Next.js frontend development, Tailwind-based UI implementation, Node.js backend architecture, and PostgreSQL-backed data modeling into one production-ready platform.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://qbcosmetic.com/",
  }),
  service({
    number: "03",
    assetFolder: "bonethome",
    title: "Bonet Houseware Kitchenware & Precision Tools Website",
    description:
      "A full-stack multilingual ecommerce website for Bonet Houseware Co., Ltd. (bonethome.com), a Yangjiang-based manufacturer of kitchenware, professional scissors, knives, and multi-functional kitchen tools. The platform showcases product series, factory story, hot-selling catalog, and global B2B shopping flows.",
    pageDescription: `Bonet Houseware (bonethome.com) was a full-stack web project I built for a kitchenware and precision cutting tools manufacturer based in Yangjiang, China's renowned knives and scissors hub. The live site presents Bonet / MuMei as an innovative brand blending traditional craftsmanship with modern technology since 2011, with multilingual support across English, Chinese, Arabic, Spanish, French, German, Russian, Vietnamese, and Portuguese.

My work focused on designing and implementing a responsive frontend that highlights premium kitchen products — including multi-purpose scissors, knife sets, peelers, camping tools, and specialty gadgets. The homepage and inner pages feature product spotlights, hot-selling grids, series collections, about and factory storytelling, blog content, contact forms, login and registration, cart functionality, and a customer service assistant. I paid close attention to multilingual navigation, product discovery, promotional sections, and clean presentation of a large SKU catalog.

On the backend, I built a Node.js API layer connected to a PostgreSQL database to support dynamic product data, user accounts, cart state, and editorial content. This kept the catalog and localized content maintainable while supporting authenticated ecommerce flows and data-driven pages.

The tech stack for this project was Next.js for the application framework and routing, Tailwind CSS for consistent utility-first styling and responsive UI, Node.js for server-side logic and APIs, and PostgreSQL for reliable relational data storage. Together, these tools delivered a fast, scalable platform for global kitchenware sales and brand storytelling.

This project strengthened my experience building a full-stack manufacturing and ecommerce website — combining Next.js frontend development, Tailwind-based UI implementation, Node.js backend architecture, and PostgreSQL-backed data modeling into one production-ready platform.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://bonethome.com/",
  }),
  service({
    number: "04",
    assetFolder: "perfexkitchen",
    title: "Perfex Commercial Kitchen Equipment Website",
    description:
      "A full-stack B2B website for Guangzhou Perfex Kitchen Equipment Co., Ltd., a professional catering equipment manufacturer offering bar, coffee, cooking, food processor, and snack machine categories. The platform emphasizes European-quality positioning, custom tooling design, inquiry workflows, and product catalogs for commercial kitchens.",
    pageDescription: `Perfex Kitchen (perfexkitchen.com) was a full-stack web project I built for a Guangzhou-based commercial kitchen equipment manufacturer with more than ten years of experience supplying professional catering equipment to international markets. The live site positions Perfex around made-in-Europe quality standards, in-house production capabilities across a 5,000 sqm facility, and categories spanning bar equipment, coffee machines, cooking lines, food processors, and snack machines.

My work focused on designing and implementing a responsive frontend that makes complex B2B equipment easy to explore. The homepage and inner pages include category mega-menus, new product showcases (charbroilers, griddles, fryers, ovens, and related SKUs), about and factory content, customized baking tool design services, events and updates, FAQ and contact flows, inquiry list functionality, login and registration, and quote-oriented CTAs. I paid close attention to technical product presentation, navigation depth for large catalogs, and trust-building copy for commercial buyers.

On the backend, I built a Python API layer connected to a PostgreSQL database to support dynamic product data, inquiry lists, user accounts, and structured editorial content. This allowed the marketing and catalog experience to stay maintainable while supporting authenticated B2B workflows and data-driven product pages.

The tech stack for this project was Next.js for the application framework and routing, Tailwind CSS for consistent utility-first styling and responsive UI, Python for server-side logic and APIs, and PostgreSQL for reliable relational data storage. Together, these tools delivered a scalable platform that balances manufacturer credibility with practical equipment sourcing.

This project strengthened my experience building a full-stack commercial kitchen equipment website — combining Next.js frontend development, Tailwind-based UI implementation, Python backend architecture, and PostgreSQL-backed data modeling into one production-ready platform.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://perfexkitchen.com/",
  }),
];

export function getWorkServiceBySlug(slug: string): WorkService | undefined {
  return WORK_SERVICES.find((project) => project.slug === slug);
}
