import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getEnemies, isConfigured, resolveImage } from "../_libs/microcms";

type Enemy = { id: string; name: string; img: string; desc?: string };

export default async function Page() {
  let enemies: Enemy[] = [];

  if (isConfigured) {
    try {
      // Fetch in pages (microCMS supports limit/offset). We'll accumulate up to a safe max.
      const pageSize = 50; // reasonable per-request size (microCMS allows up to 100)
      let offset = 0;
      const accumulated: any[] = [];
      let totalCount = Infinity;
      // loop until we've fetched all or reached a safety cap
      while (offset < totalCount && accumulated.length < 1000) {
        const res = await getEnemies("enemy-list", { limit: pageSize, offset });
        if (!res) break;
        totalCount = res.totalCount ?? totalCount;
        if (res.contents && res.contents.length) {
          accumulated.push(...res.contents);
          offset += res.contents.length;
        } else {
          break;
        }
        // safety: break if API returns fewer than requested
        if (res.contents.length < pageSize) break;
      }

      if (accumulated.length) {
        enemies = accumulated.map((c: any) => ({
          id: c.id ?? c.slug ?? String(c._id ?? c.id),
          name: c.name ?? c.title ?? "Unnamed",
          img: resolveImage((c.image ?? c.img) as any) ?? "/repo.jpeg",
          desc: c.desc ?? c.description ?? "",
        }));
      } else {
        // map fallback images to asset URLs when possible
        enemies = enemies.map((e) => ({
          ...e,
          img: resolveImage(e.img) ?? e.img,
        }));
      }
    } catch (err) {
      // keep fallback if microCMS fails
      // eslint-disable-next-line no-console
      console.error("microCMS fetch failed:", err);
      enemies = enemies.map((e) => ({
        ...e,
        img: resolveImage(e.img) ?? e.img,
      }));
    }
  } else {
    // not configured: still try to resolve images (no-op if not mapped)
    enemies = enemies.map((e) => ({ ...e, img: resolveImage(e.img) ?? e.img }));
  }

  return (
    <main className={styles.container}>
      <div className={styles.headerRow}>
        <Link href="/" className={styles.back} aria-label="ホームに戻る">
          ← ホーム
        </Link>
        <div className={styles.count}>{enemies.length} 体の敵</div>
      </div>

      <h1 className={styles.title}>敵一覧</h1>

      <div className={styles.grid}>
        {enemies.map((e) => (
          <Link
            href={`/enemy-list/${e.id}`}
            key={e.id}
            className={styles.card}
            aria-label={`${e.name} の詳細へ`}
          >
            <article>
              <div className={styles.cardImage}>
                <Image
                  src={e.img}
                  alt={e.name}
                  width={320}
                  height={180}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{e.name}</h3>
                <p className={styles.cardDesc}>
                  {e.desc || "（説明が未設定）"}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
