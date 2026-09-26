export type QueryValue = string | number | boolean | null | undefined;
export type QueryMap = Record<string, QueryValue | QueryValue[]>;

/** Construye query string omitiendo null/undefined. */
export function buildQuery(params: QueryMap): string {
  const parts: string[] = [];
  for (const [key, raw] of Object.entries(params)) {
    const values = Array.isArray(raw) ? raw : [raw];
    for (const v of values) {
      if (v === null || v === undefined) continue;
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
    }
  }
  return parts.length ? `?${parts.join("&")}` : "";
}

/** Parsea search (?a=1&b=2) a objeto. Claves repetidas → array. */
export function parseQuery(search: string): Record<string, string | string[]> {
  const q = search.startsWith("?") ? search.slice(1) : search;
  const out: Record<string, string | string[]> = {};
  if (!q) return out;
  for (const pair of q.split("&")) {
    if (!pair) continue;
    const [k, v = ""] = pair.split("=");
    const key = decodeURIComponent(k);
    const val = decodeURIComponent(v);
    if (key in out) {
      const prev = out[key];
      out[key] = Array.isArray(prev) ? [...prev, val] : [prev as string, val];
    } else {
      out[key] = val;
    }
  }
  return out;
}

/** Une base + path + query de forma segura. */
export function joinUrl(base: string, path = "", query?: QueryMap): string {
  const b = base.replace(/\/+$/, "");
  const p = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${b}${p}${query ? buildQuery(query) : ""}`;
}

/** Extrae pathname limpio sin trailing slash (excepto root). */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}
