import { buildQuery, joinUrl, normalizePath, parseQuery } from "./index";

const q = buildQuery({ page: 2, tag: ["api", "ts"], empty: null });
console.log("buildQuery →", q);

console.log("parseQuery →", parseQuery("?page=2&tag=api&tag=ts"));
console.log("joinUrl →", joinUrl("https://api.example.com", "v1/users", { active: true }));
console.log("normalizePath →", normalizePath("/docs/api/"));
