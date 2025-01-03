import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";

export const metadata: Metadata = {
	title: "tools | tenori.uk",
	description: "卵の殻を破らねば、雛鳥は生まれずに死んでいく。",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}