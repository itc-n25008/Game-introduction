import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const ENEMIES = [
  {
    id: "animal",
    name: "Animal",
    img: "/animal.png",
    desc: "",
  },
  {
    id: "apex-predator",
    name: "Apex-predator",
    img: "/apex-predator.png",
    desc: "",
  },
  {
    id: "banger",
    name: "Banger",
    img: "/banger.png",
    desc: "",
  },
  {
    id: "bella",
    name: "Bella",
    img: "/bella.png",
    desc: "",
  },
  {
    id: "birthday-boy",
    name: "Birthday-boy",
    img: "/birthday-boy.png",
    desc: "",
  },
  {
    id: "bowtie",
    name: "Bowtie",
    img: "/bowtie.png",
    desc: "",
  },
  {
    id: "cleanup-crew",
    name: "Cleanup-crew",
    img: "/cleanup-crew.png",
    desc: "",
  },
  {
    id: "clown",
    name: "Clown",
    img: "/clown.png",
    desc: "",
  },
  {
    id: "elsa",
    name: "Elsa",
    img: "/elsa.png",
    desc: "",
  },
  {
    id: "eye",
    name: "Eye",
    img: "/eye.png",
    desc: "",
  },
  {
    id: "gambit",
    name: "Gambit",
    img: "/gambit.png",
    desc: "",
  },
  {
    id: "gnomes",
    name: "Gnomes",
    img: "/gnomes.png",
    desc: "",
  },
  {
    id: "hard-hugger",
    name: "Hard-hugger",
    img: "/hard-hugger.png",
    desc: "",
  },
  {
    id: "head-grabber",
    name: "Head-grabber",
    img: "/head-grabber.png",
    desc: "",
  },
  {
    id: "headman",
    name: "Headman",
    img: "/headman.png",
    desc: "",
  },
  {
    id: "hide",
    name: "Hide",
    img: "/hide.png",
    desc: "",
  },
  {
    id: "huntsman",
    name: "Huntsman",
    img: "/huntsman.png",
    desc: "",
  },
  {
    id: "loom",
    name: "Loom",
    img: "/loom.png",
    desc: "",
  },
  {
    id: "mentalist",
    name: "Mentalist",
    img: "/mentalist.png",
    desc: "",
  },
  {
    id: "oogly",
    name: "Oogly",
    img: "/oogly.png",
    desc: "",
  },
  {
    id: "reaper",
    name: "Reaper",
    img: "/reaper.png",
    desc: "",
  },
  {
    id: "robe",
    name: "Robe",
    img: "/robe.png",
    desc: "",
  },
  {
    id: "rugrat",
    name: "Rugrat",
    img: "/rugrat.png",
    desc: "",
  },
  {
    id: "shadow-child",
    name: "Shadow-child",
    img: "/shadow-child.png",
    desc: "",
  },
  {
    id: "shef",
    name: "Shef",
    img: "/shef.png",
    desc: "",
  },
  {
    id: "spewer",
    name: "Spewer",
    img: "/spewer.png",
    desc: "",
  },
  {
    id: "tick",
    name: "Tick",
    img: "/tick.png",
    desc: "",
  },
  {
    id: "trudge",
    name: "Trudge",
    img: "/trudge.png",
    desc: "",
  },
  {
    id: "upscream",
    name: "Upscream",
    img: "/upscream.png",
    desc: "",
  },
];

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.headerRow}>
        <Link href="/" className={styles.back} aria-label="ホームに戻る">
          ← ホーム
        </Link>
        <div className={styles.count}>{ENEMIES.length} 件の敵</div>
      </div>

      <h1 className={styles.title}>敵一覧</h1>
      <p className={styles.lead}>
        ゲーム内に登場する代表的な敵たち。カードをクリックすると詳細ページへ移動します（未実装）。
      </p>

      <div className={styles.grid}>
        {ENEMIES.map((e) => (
          <Link href={`/enemy-list/${e.id}`} key={e.id} className={styles.card} aria-label={`${e.name} の詳細へ`}>
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
                <p className={styles.cardDesc}>{e.desc || '（説明が未設定）'}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
