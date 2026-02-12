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
          R.E.P.Oは、最大6人で挑むオンライン協力型ホラーゲームです。
          プレイヤーは仲間と共に、恐ろしい環境へ足を踏み入れ、“貴重品”を回収していく。
          ボイスチャット（VC）で仲間とわいわいしながら楽しめるゲームです。
          一人でもプレイできますので挑戦してみるのもいいでしょう。
        </p>
      </section>

      <section className={styles.section} id="controls">
        <h2 className={styles.h2}>操作方法</h2>
        <div className={styles.controlsGrid}>
          <div>
            <ul>
              <li>移動:WASD</li>
              <li>アイテムの出し入れ: 1–3キー</li>
              <li>視点操作:マウスパッド、マウス</li>
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

      <section className={styles.section} id="price">
        <h2 className={styles.h2}>値段</h2>
        <div className={styles.priceBox}>
          <span className={styles.price}>¥1200</span>
        </div>
        <div className={styles.priceBox}>
          <span className={styles.price}>セール時¥780~¥840</span>
        </div>
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

      

      <section className={styles.section} id="enemies">
        <h2 className={styles.h2}>敵一覧</h2>
        <div className={styles.enemyList}>
          <Link href="/enemy-list" className={styles.enemyCard}>
            敵一覧を見る
          </Link>
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
