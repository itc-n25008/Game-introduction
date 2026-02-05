"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>R.E.P.O</h1>
          <p className={styles.lead}>協力型ホラーゲーム</p>
        </div>
        <div className={styles.heroImage} aria-hidden>
          <Image
            src="/repo.jpeg"
            alt="R.E.P.O preview"
            width={420}
            height={240}
            className={styles.preview}
          />
        </div>
      </section>

      <section className={styles.section} id="overview">
        <h2 className={styles.h2}>概要</h2>
        <p>
          R.E.P.Oは、最大6人で挑むオンライン協力型ホラーゲーム。
          プレイヤーは仲間と共に、恐ろしい環境へ足を踏み入れ、“貴重品”を回収していく。
          ボイスチャット（VC）で仲間とわいわいしながら楽しめるゲームです。
        </p>
      </section>

      <section className={styles.section} id="controls">
        <h2 className={styles.h2}>操作方法</h2>
        <div className={styles.controlsGrid}>
          <div>
            <ul>
              <li>移動:WASD</li>
              <li>アイテム所持: 1–3キー</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} id="requirements">
        <h2 className={styles.h2}>プレイ方法</h2>
        <ul>
          <li>PC（steam）</li>
        </ul>
      </section>

      <section className={styles.section} id="screenshots">
        <h2 className={styles.h2}>スクリーンショット</h2>
        <div className={styles.screenshots}>
          <figure>
            <Image src="/reponohin.jpeg" alt="" width={300} height={180} />
            <figcaption></figcaption>
          </figure>
          <figure>
            <Image src="/repofait.jpeg" alt="" width={300} height={180} />
            <figcaption></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} id="links">
        <h2 className={styles.h2}>外部リンク</h2>
        <div className={styles.links}>
          <a
            className={styles.externalLink}
            href="https://store.steampowered.com/app/3241660/REPO/?l=japanese"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式サイト:R.E.P.O
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} R.E.P.O</small>
      </footer>
    </main>
  );
}
