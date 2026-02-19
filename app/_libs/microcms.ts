import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Enemy = {
  id: string;
  name: string;
  img?: MicroCMSImage | string;
  desc?: string;
} & MicroCMSListContent;

export const isConfigured = Boolean(
  process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY,
);

let client: ReturnType<typeof createClient> | null = null;
if (isConfigured) {
  client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
    apiKey: process.env.MICROCMS_API_KEY as string,
  });
}

export const getEnemies = async (
  endpoint = "enemies",
  queries?: MicroCMSQueries,
) => {
  if (!client) {
    throw new Error("microCMS client is not configured");
  }

  const listData = await client.getList<Enemy>({
    endpoint,
    queries,
  });
  return listData;
};

// convenience wrapper for the `enemy-list` endpoint if your microCMS uses that name
export const getEnemyList = (queries?: MicroCMSQueries) =>
  getEnemies("enemy-list", queries);

export type Category = {
  name: string;
};

// Asset host - allow override via env if your microCMS setup differs
export const ASSET_HOST =
  process.env.MICROCMS_ASSET_HOST || "https://images.microcms-assets.io";

export function resolveImage(img?: MicroCMSImage | string): string | undefined {
  if (!img) return undefined;
  if (typeof img === "string") {
    // absolute URL
    if (/^https?:\/\//.test(img)) return img;
    // local path -> if configured, map to asset host, otherwise return as-is
    if (isConfigured) return `${ASSET_HOST}${img}`;
    return img;
  }

  // MicroCMS Image type often has url property
  // @ts-ignore - MicroCMSImage may vary
  const url = (img as any).url || (img as any).src || (img as any).path;
  if (url) return url;
  return undefined;
}
