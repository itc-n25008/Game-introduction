import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const ENEMIES = [
  {
    id: "animal",
    name: "Animal(アニマル)",
    img: "/animal.png",
    desc: "体当りしてくる",
  },
  {
    id: "apex-predator",
    name: "Apex-predator(エイペックス・プレデター)",
    img: "/apex-predator.png",
    desc: "視点に入り込んでくる。触ると怒って攻撃してくる",
  },
  {
    id: "banger",
    name: "Banger(バンガー)",
    img: "/banger.png",
    desc: "爆弾を引火して12秒後に爆発する。爆発に巻き込まれるとダメージを受ける",
  },
  {
    id: "bella",
    name: "Bella(ベラ)",
    img: "/bella.png",
    desc: "障害物があると怒ってくる",
  },
  {
    id: "birthday-boy",
    name: "Birthday-boy(バースデイ・ボーイ)",
    img: "/birthday-boy.png",
    desc: "風船を所々に置く、風船を破壊すると襲ってくる",
  },
  {
    id: "bowtie",
    name: "Bowtie(ボウタイ)",
    img: "/bowtie.png",
    desc: "風を吹き付けて攻撃してくる",
  },
  {
    id: "chef",
    name: "Chef(シェフ)",
    img: "/chef.png",
    desc: "包丁を振り回しながら飛びかかってくる",
  },
  {
    id: "cleanup-crew",
    name: "Cleanup-crew(クリーンアップ・クルー)",
    img: "/cleanup-crew.png",
    desc: "顔を飛ばして5秒後に爆発する",
  },
  {
    id: "clown",
    name: "Clown(クラウン)",
    img: "/clown.png",
    desc: "レーザーを撃ってきて近づくと蹴ってくる",
  },
  {
    id: "elsa",
    name: "Elsa(エルサ)",
    img: "/elsa.png",
    desc: "視点に入り込んでくる、触らないと形態変化して怒って攻撃してくる",
  },
  {
    id: "gambit",
    name: "Gambit(ギャンビット)",
    img: "/gambit.png",
    desc: "追いかけてきて強制的にルーレットを回してHPを減らしたり増やしたりする。たまにお金がもらえる",
  },
  {
    id: "gnomes",
    name: "Gnomes(ノーム)",
    img: "/gnomes.png",
    desc: "貴重品がある場合、壊しに来る",
  },
  {
    id: "hard-hugger",
    name: "Hard-hugger(ハード・ハガー)",
    img: "/hard-hugger.png",
    desc: "ガスを噴出。ガスに触れるとゆっくりと敵の方に吸い寄せられた後、噛みつきで攻撃してくる",
  },
  {
    id: "head-grabber",
    name: "Head-grabber(ヘッド・グラバー)",
    img: "/head-grabber.png",
    desc: "ひっかきか、ドロップキックをっしてくる",
  },
  {
    id: "headman",
    name: "Headman(ヘッドマン)",
    img: "/headman.png",
    desc: "追いかけて攻撃してきます",
  },
  {
    id: "hide",
    name: "Hidden(ヒドゥン)",
    img: "/hide.png",
    desc: "プレイヤーを遠くに運ぶ",
  },
  {
    id: "huntsman",
    name: "Huntsman(ハンツマン)",
    img: "/huntsman.png",
    desc: "音を立てると撃ってくる",
  },
  {
    id: "loom",
    name: "Loom(ルーム)",
    img: "/loom.png",
    desc: "狙ったプレイヤーを追いかけて攻撃する",
  },
  {
    id: "mentalist",
    name: "Mentalist(メンタリスト)",
    img: "/mentalist.png",
    desc: "重力場を発生させて周囲のプレイヤーや貴重品を浮かせて落下させる",
  },
  {
    id: "oogly",
    name: "Oogly(ウーグリー)",
    img: "/oogly.png",
    desc: "地面を照らしながら飛んでいて、その範囲に入ると襲いかかってくる",
  },
  {
    id: "peeper",
    name: "Peeper(ピーーパー)",
    img: "/peeper.png",
    desc: "プレイヤーの視点を奪う",
  },
  {
    id: "reaper",
    name: "Reaper(リーパー)",
    img: "/reaper.png",
    desc: "刃を振り回しながら前進してくる",
  },
  {
    id: "robe",
    name: "Robe(ローブ)",
    img: "/robe.png",
    desc: "目を合わせると加速する",
  },
  {
    id: "rugrat",
    name: "Rugrat(ラグラット)",
    img: "/rugrat.png",
    desc: "貴重品を投げて攻撃してくる",
  },
  {
    id: "shadow-child",
    name: "Shadow-child(シャドウ・チャイルド)",
    img: "/shadow-child.png",
    desc: "3秒間見ると攻撃してくる",
  },
  {
    id: "spewer",
    name: "Spewer(スピューワー)",
    img: "/spewer.png",
    desc: "プレイヤーに取り付く、ゲロを出して攻撃してくる",
  },
  {
    id: "tick",
    name: "Tick(ティック)",
    img: "/tick.png",
    desc: "プレイヤーから体力を吸い取る",
  },
  {
    id: "trudge",
    name: "Trudge(トラッジ)",
    img: "/trudge.png",
    desc: "プレイヤーを吸い込んで爆発させる",
  },
  {
    id: "upscream",
    name: "Upscream(アップスクリーム)",
    img: "/upscream.png",
    desc: "プレイヤーを吹き飛ばす",
  },
];

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.headerRow}>
        <Link href="/" className={styles.back} aria-label="ホームに戻る">
          ← ホーム
        </Link>
        <div className={styles.count}>{ENEMIES.length} 体の敵</div>
      </div>

      <h1 className={styles.title}>敵一覧</h1>

      <div className={styles.grid}>
        {ENEMIES.map((e) => (
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
