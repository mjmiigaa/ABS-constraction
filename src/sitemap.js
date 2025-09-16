import { writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseUrl = "https://abs-constraction.vercel.app/"; // Change to your real domain

const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  // Add more routes as needed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>
`;

await writeFile(join(__dirname, "../public/sitemap.xml"), sitemap, "utf8");
console.log("Sitemap generated: public/sitemap.xml");
