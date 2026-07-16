import ThemeProvider from "@/app/theme-provider";

import { fonts } from "./fonts";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "TRACEBACK",
	description: "You're not supposed to be here, are you?",
	openGraph: {
		title: "TRACEBACK",
		description: "You're not supposed to be here, are you?",
		images: [
			{
				url: "https://trce.rackodo.dev/trce_favicon.png",
				width: 80,
				height: 80,
				alt: "TRACEBACK Logo"
			}
		],
		url: "https://trce.rackodo.dev",
		siteName: "TRACEBACK"
	},
	twitter: { card: "summary" },
	other: { "theme-color": "#004A80" }
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${fonts.rajdhani.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="bg-background text-text flex min-h-full flex-col">
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
