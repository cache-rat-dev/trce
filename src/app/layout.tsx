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
		images: "https://trce.rackodo.dev/trce_favicon.png"
	},
	twitter: {
		title: "TRACEBACK",
		description: "You're not supposed to be here, are you?",
		images: "https://trce.rackodo.dev/trce_favicon.png",
		card: "summary"
	},
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
