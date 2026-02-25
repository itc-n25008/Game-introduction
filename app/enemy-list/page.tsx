import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getEnemies, isConfigured, resolveImage } from "../_libs/microcms";

type Enemy = { id: string; name: string; img: string; desc?: string };
const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; // 1x1 transparent GIF

export default async function Page() {
  let enemies: Enemy[] = [];

  if (isConfigured) {
    try {
      console.log("isConfigured:", isConfigured);
      const res = await getEnemies({ limit: 100, offset: 0 });
      const contents = res?.contents ?? [];
      if (contents.length) {
        enemies = contents.map((c: any) => ({
          id: c.id ?? c.slug ?? String(c._id ?? c.id),
          name: c.name ?? c.title ?? "Unnamed",
          img: c.image?.url ?? PLACEHOLDER,
          desc: c.explanation ?? "",
        }));
      } else {
        // no contents returned — keep empty list
        enemies = [];
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("microCMS fetch failed:", err);
      enemies = enemies.map((e) => ({
        ...e,
        img: resolveImage(e.img) ?? e.img,
      }));
    }
  } else {
    // microCMS 未設定時は案内を出しつつ空リストを表示する
    enemies = [];
  }
  console.log("enemies:", enemies);
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
        {enemies.map((enemy) => (
          <Link
            href={`/enemy-list/${enemy.id}`}
            key={enemy.id}
            className={styles.card}
            aria-label={`${enemy.name} の詳細へ`}
          >
            <article>
              <Image
                src={enemy.img}
                alt={enemy.name}
                width={270}
                height={180}
                className={styles.img}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{enemy.name}</h3>
                <p className={styles.cardDesc}>
                  {enemy.desc || "（説明が未設定）"}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
