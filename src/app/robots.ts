import type { MetadataRoute } from "next";

// Sistema privado: nenhum buscador deve indexar.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
