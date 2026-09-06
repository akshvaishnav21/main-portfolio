import type { MetadataRoute } from "next";
import { studies } from "@/lib/studies";
import { absoluteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    ...studies.map((study) => ({
      url: absoluteUrl(`/projects/${study.slug}`),
      priority: 0.8,
    })),
  ];
}
