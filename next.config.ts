import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Origem do Supabase (API REST/Auth via https e Realtime via wss).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseOrigins = supabaseUrl
  ? `${supabaseUrl} ${supabaseUrl.replace(/^https:/, "wss:")}`
  : "";

/**
 * Content Security Policy: só permite carregar scripts, estilos, fontes e
 * conexões do próprio sistema (e do Supabase). Bloqueia o site de ser
 * embutido em iframes de terceiros (clickjacking).
 *
 * TODO(seguranca): quando o login existir e todas as páginas forem dinâmicas,
 * trocar 'unsafe-inline' em script-src por CSP com nonce gerado no proxy.ts.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  ["connect-src 'self'", supabaseOrigins, isDev ? "ws:" : ""].filter(Boolean).join(" "),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Força HTTPS por 2 anos (só tem efeito quando servido via HTTPS).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Sistema privado: não deve aparecer em buscadores.
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
