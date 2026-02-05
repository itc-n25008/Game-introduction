import "./globals.css";

export const metadata = {
	title: "R.E.P.O — 短時間で遊べる戦略パズルRPG",
	description: "R.E.P.Oは探索と拠点育成が融合した短時間セッション型の戦略パズルRPG。ベータ登録受付中。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
