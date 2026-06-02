import dydinPreview from "@/assets/Works/web/dydin/preview.png";
import qbcosmeticPreview from "@/assets/Works/web/qbcosmetic/preview.png";
import bonethomePreview from "@/assets/Works/web/bonethome/preview.png";
import perfexkitchenPreview from "@/assets/Works/web/perfexkitchen/preview.png";
import catalogakPreview from "@/assets/Works/mobile/catalogak/preview.png";
import urestaurantsPreview from "@/assets/Works/mobile/urestaurants/preview.png";
import readyecommercePreview from "@/assets/Works/mobile/readyecommerce/preview.png";
import casematePreview from "@/assets/Works/mobile/casemate/preview.png";

export type WorkCategory = "web" | "mobile";

const WORK_PREVIEW_BY_KEY: Record<string, string> = {
  "web/dydin": dydinPreview,
  "web/qbcosmetic": qbcosmeticPreview,
  "web/bonethome": bonethomePreview,
  "web/perfexkitchen": perfexkitchenPreview,
  "mobile/catalogak": catalogakPreview,
  "mobile/urestaurants": urestaurantsPreview,
  "mobile/readyecommerce": readyecommercePreview,
  "mobile/casemate": casematePreview,
};

export const WORK_SECTIONS: ReadonlyArray<{
  category: WorkCategory;
  label: string;
}> = [
  { category: "web", label: "Web" },
  { category: "mobile", label: "Mobile App" },
];

export const FULLSTACK_PREVIEW_ASPECT = "1448 / 1086";

export interface WorkService {
  category: WorkCategory;
  number: string;
  slug: string;
  title: string;
  description: string;
  pageDescription?: string;
  frontendStack: readonly string[];
  backendStack: readonly string[];
  techHighlights: readonly string[];
  image: string;
  imageAspect?: string;
  ctaUrl?: string;
}

function resolveWorkPreview(category: WorkCategory, assetFolder: string): string {
  const key = `${category}/${assetFolder}`;
  const fromFolder = WORK_PREVIEW_BY_KEY[key];
  if (fromFolder) return fromFolder;
  throw new Error(
    `Missing preview for "${key}". Add src/assets/Works/${category}/${assetFolder}/preview.png`,
  );
}

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
  assetFolder: string;
};

function service(entry: WorkServiceInput): WorkService {
  const { assetFolder, category, ...rest } = entry;
  return {
    ...rest,
    category,
    image: resolveWorkPreview(category, assetFolder),
    slug: entry.slug ?? workProjectSlug(entry.title),
  };
}

export const WORK_SERVICES: WorkService[] = [
  service({
    category: "web",
    number: "01",
    assetFolder: "dydin",
    title: "Ningbo DYD HVAC & Appliance Parts Website",
    description:
      "Full-stack B2B ecommerce for HVAC and aftermarket appliance parts — industrial catalog, minimum-order pricing, and dependable shopping flows backed by 20+ years of industry experience.",
    frontendStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
    backendStack: [
      "Python",
      "REST API",
      "PostgreSQL",
      "Redis",
      "JWT Auth",
    ],
    techHighlights: [
      "Large multi-category parts catalog with MOQ and pricing",
      "Account, cart, and checkout for B2B buyers",
      "Blog, FAQ, and trust content for aftermarket parts",
      "SSR-friendly architecture for SEO and performance",
    ],
    pageDescription: `Ningbo DYD (dydin.com) is a full-stack B2B platform for an import and export company supplying washing machine, dryer, refrigerator, oven, dishwasher, and microwave parts. The site communicates the brand promise "Durable. Yours. Dependable" while making a technical catalog approachable on desktop and mobile.

I designed the storefront around fast category navigation, readable product cards, and clear paths from discovery to inquiry and purchase. Content sections support long-term trust — services, about pages, reviews, and editorial updates — without overwhelming buyers who need the right part quickly.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://dydin.com/",
  }),
  service({
    category: "web",
    number: "02",
    assetFolder: "qbcosmetic",
    title: "Qianbang Group Cosmetics & Brand Consulting Website",
    description:
      "Corporate and product-facing site for a cosmetics brand consulting group — ODM/OEM positioning, factory credentials, category browsing, and ecommerce for skincare and beauty lines.",
    frontendStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Component-driven UI",
    ],
    backendStack: [
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Session auth",
      "Media storage",
    ],
    techHighlights: [
      "Corporate storytelling with factory and R&D proof points",
      "Product categories for cleansers, serums, sun care, and moisturizers",
      "Cart, registration, and account-ready ecommerce flows",
      "Structured CMS-style content for news and brand pages",
    ],
    pageDescription: `Qianbang Group (qbcosmetic.com) serves as both a brand authority site and a shoppable catalog for a Guangzhou cosmetics and consulting company. The experience introduces supply-chain strength, certifications, and ODM/OEM services while still supporting practical product discovery.

The interface prioritizes hierarchy and clarity for dense B2B information — bilingual-ready layout patterns, collection structure, and conversion-focused product pages that help visitors understand credentials and shop in one journey.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://qbcosmetic.com/",
  }),
  service({
    category: "web",
    number: "03",
    assetFolder: "bonethome",
    title: "Bonet Houseware Kitchenware & Precision Tools Website",
    description:
      "Multilingual ecommerce for a Yangjiang kitchenware manufacturer — product series, factory story, hot-selling catalog, and global B2B shopping for scissors, knives, and specialty tools.",
    frontendStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "i18n-ready UI",
    ],
    backendStack: [
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Localized content",
      "Cart & orders",
    ],
    techHighlights: [
      "Multi-language storefront for global buyers",
      "Series collections and promotional product grids",
      "Factory and brand storytelling for Bonet / MuMei",
      "Assistant-ready contact and service flows",
    ],
    pageDescription: `Bonet Houseware (bonethome.com) presents precision kitchenware and cutting tools with a multilingual experience spanning English, Chinese, Arabic, European languages, and more. The site balances manufacturer credibility with a large SKU catalog and conversion-focused shopping.

I focused on product discovery for varied categories — scissors, knife sets, peelers, and specialty gadgets — with consistent spacing, strong imagery, and navigation that scales as collections grow.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://bonethome.com/",
  }),
  service({
    category: "web",
    number: "04",
    assetFolder: "perfexkitchen",
    title: "Perfex Commercial Kitchen Equipment Website",
    description:
      "B2B equipment catalog for a commercial kitchen manufacturer — deep category navigation, inquiry workflows, new product showcases, and quote-oriented CTAs for international buyers.",
    frontendStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mega-menu UX",
    ],
    backendStack: [
      "Python",
      "REST API",
      "PostgreSQL",
      "Inquiry lists",
      "Role-based access",
    ],
    techHighlights: [
      "Bar, coffee, cooking, and food-processor category depth",
      "SKU-rich product pages for commercial equipment",
      "Custom tooling and factory capability sections",
      "Quote and inquiry flows for B2B buyers",
    ],
    pageDescription: `Perfex Kitchen (perfexkitchen.com) positions a Guangzhou manufacturer for international catering buyers, emphasizing in-house production, quality standards, and a broad equipment range from bar lines to snack machines.

The UX is built for technical buyers who compare specifications before requesting quotes — organized mega-menus, factory content, events, and product showcases that keep high-SKU catalogs scannable on any device.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl: "https://perfexkitchen.com/",
  }),
  service({
    category: "mobile",
    number: "01",
    assetFolder: "catalogak",
    title: "Catalogak POS & E-commerce Mobile App",
    description:
      "Flutter Android app unifying in-store POS and online sales — inventory sync, order management, WhatsApp customer updates, and omnichannel reporting for retailers.",
    frontendStack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Material Design",
      "Android",
    ],
    backendStack: [
      "Node.js",
      "REST API",
      "PostgreSQL",
      "WebSockets",
      "WhatsApp API",
    ],
    techHighlights: [
      "POS and online storefront synced from one app",
      "WhatsApp order status updates for customers",
      "Centralized inventory and order dashboard",
      "Combined in-store and online sales insights",
    ],
    pageDescription: `Catalogak is an omnichannel retail app for Al Takamul Alteqani Computers (UAE), published on Google Play. Merchants run counter and mobile sales from one client while keeping stock and orders aligned.

The UI is optimized for staff on the move — quick product access, clear order states, and operational screens that reduce friction during busy retail hours.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl:
      "https://play.google.com/store/apps/details?id=catalogak.client.ae.altkamul",
  }),
  service({
    category: "mobile",
    number: "02",
    assetFolder: "urestaurants",
    title: "URestaurants Local Dining Discovery Mobile App",
    description:
      "Flutter discovery app for local restaurants — menus, venue details, and contact info in a lightweight Food & Drink experience on Google Play.",
    frontendStack: [
      "Flutter",
      "Dart",
      "GoRouter",
      "Material Design",
      "Android",
    ],
    backendStack: [
      "Python",
      "REST API",
      "PostgreSQL",
      "Redis caching",
      "Content API",
    ],
    techHighlights: [
      "Restaurant listings with menus and contact details",
      "Readable browse-first layouts for quick decisions",
      "Cached content for faster repeat visits",
      "Maintainable venue data model for updates",
    ],
    pageDescription: `URestaurants helps diners in Italy find nearby venues with up-to-date menus, phone numbers, and practical visit information. The app is published on Google Play under Food & Drink.

The experience stays intentionally simple — fast scanning, clear typography, and direct access to the details people need when choosing where to eat.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl:
      "https://play.google.com/store/apps/details?id=celo.URestaurants",
  }),
  service({
    category: "mobile",
    number: "03",
    assetFolder: "readyecommerce",
    title: "Ready eCommerce Seller Mobile App",
    description:
      "React Native seller app for store owners — product CRUD, order creation, on-the-spot payments, push alerts, and sales analytics on Google Play.",
    frontendStack: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "TanStack Query",
      "Android",
    ],
    backendStack: [
      "Node.js",
      "REST API",
      "PostgreSQL",
      "FCM push",
      "Payment gateways",
    ],
    techHighlights: [
      "Publish and draft products from mobile",
      "Order builder with live inventory sync",
      "Cash, card, and wallet payment collection",
      "Revenue and bestseller analytics with alerts",
    ],
    pageDescription: `Ready eCommerce Seller is a business app by RazinSoft Ltd for entrepreneurs and retail brands managing stores on the go. Sellers add products, fulfill orders, get paid, and monitor performance without a desktop.

Dashboard-style screens emphasize speed — fewer taps to create orders, clear payment status, and notifications when new sales or reviews arrive.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl:
      "https://play.google.com/store/apps/details?id=com.readyecommerce.sellerapp",
  }),
  service({
    category: "mobile",
    number: "04",
    assetFolder: "casemate",
    title: "Case-Mate Shopping Mobile App",
    description:
      "React Native shopping app for Case-Mate — exclusive drops, favorites, push-driven launches, and secure checkout on Google Play.",
    frontendStack: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "TanStack Query",
      "Android",
    ],
    backendStack: [
      "Python",
      "REST API",
      "PostgreSQL",
      "FCM push",
      "Ecommerce API",
    ],
    techHighlights: [
      "Early-access and exclusive product launches",
      "Saved favorites and fast return checkout",
      "Push notifications for offers and drops",
      "Order history and account management",
    ],
    pageDescription: `Case-Mate is a branded mobile shop for phone cases and accessories, built for customers who want launches, exclusives, and quick checkout on Android.

The interface highlights product imagery and drop culture while keeping cart and account flows straightforward for repeat buyers.`,
    imageAspect: FULLSTACK_PREVIEW_ASPECT,
    ctaUrl:
      "https://play.google.com/store/apps/details?id=co.app.id_casemate",
  }),
];

export function getWorkServiceBySlug(slug: string): WorkService | undefined {
  return WORK_SERVICES.find((project) => project.slug === slug);
}

export function getWorkServicesByCategory(category: WorkCategory): WorkService[] {
  return WORK_SERVICES.filter((project) => project.category === category);
}

/** Search params for `/work` — keeps the active Web / Mobile tab when navigating back. */
export function workListSearch(category: WorkCategory): { tab: WorkCategory } {
  return { tab: category };
}
