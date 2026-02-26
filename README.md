# Game-introduction

自分がやっているゲームを紹介するサイトです。
Next.jsとmicroCMSを使用しています。
ゲームリンク https://store.steampowered.com/app/3241660/REPO/?l=japanese

## 使用技術

- Next.js (v14.x)
- React
- TypeScript
- microCMS (microcms-js-sdk)

## 必要環境

- Node.js 18+（LTS 推奨）
- npm


## クイックスタート（ローカル）

1. 依存をインストール

```bash
npm install
```

2. 開発サーバを起動

```bash
npm run dev
```

3. ブラウザで確認

http://localhost:3000/enemy-list

## microCMS のセットアップ

- microCMS の管理画面でサービスを作成し、`サービスドメイン` と `APIキー` を取得します。
- コレクション（例: `enemy-list` または `enemies`）を作り、画像フィールド（type: Image）を追加します。
- 画像は microCMS 管理画面からアップロードして運用してください。

```bash
curl -s -H "X-API-KEY: $MICROCMS_API_KEY" \
	"https://<SERVICE_DOMAIN>.microcms.io/api/v1/enemy-list?limit=1" | jq .
```

## 主要なファイル・ディレクトリ

- `app/enemy-list/page.tsx` — 敵一覧ページ（microCMS から取得）
- `app/_libs/microcms.ts` — microCMS ヘルパー
- `next.config.mjs` — Next.js の設定（画像ホストなど）
