import { createClient, MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const isConfigured =
  !!process.env.MICROCMS_SERVICE_DOMAIN && !!process.env.MICROCMS_API_KEY;

export const getEnemies = async (queries?: MicroCMSQueries) => {
  return await client.get({
    endpoint: "enemy-list",
    queries,
  });
};

export const resolveImage = (image: any): string | null => {
  if (!image) return null;
  if (typeof image === "string") return image;
  if (image.url) return image.url;
  return null;
};
