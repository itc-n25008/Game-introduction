import "./globals.css";

export const metadata = {
  title: "R.E.P.O — 協力型オンラインゲーム",
  description:
    "R.E.P.OはR.E.P.Oは、最大6人で挑むオンライン協力型ホラーゲームです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
