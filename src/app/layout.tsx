import { fonts } from "@/components/fonts";
import ThemeProvider from "@/components/logic/themeProvider";

import type { Metadata } from "next";

import "@/globals.css";

import ThemeSwitcher from "@/components/ui/themeSwitcher";

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
			{/* Lock the viewport body */}
			<body className="bg-background text-text flex h-full min-h-full flex-col overflow-hidden">
				<ThemeProvider>
					{/* LAYER 1: The Outer Parent Container (Applies the parent's margins) */}
					<div className="h-dvh w-full overflow-hidden p-0 sm:p-5">
						{/* LAYER 2: The Grid Background 
                            Stays fixed to this exact size, filling the parent's margins */}
						<div className="gridBg relative flex h-full w-full flex-col">
							{/* FIXED UI: Theme Switcher */}
							<ThemeSwitcher className="fixed top-8 left-1/2 z-50 w-full max-w-xs -translate-x-1/2 sm:top-10" />

							{/* LAYER 3: The Scrollable Container 
                                This creates the internal margins that strictly contain the children */}
							<div className="w-full flex-1 overflow-y-auto pt-20 pb-24 sm:pt-16 sm:pb-20">
								{/* LAYER 4: The Content Wrapper 
                                    Fits its children perfectly, no matter how tall they get */}
								<div className="mx-auto flex h-auto min-h-full w-full max-w-2xl shrink-0 flex-col items-center justify-center">
									{children}
								</div>
							</div>

							{/* FIXED UI: Footer */}
							<footer className="bg-background border-text fixed bottom-8 left-1/2 z-50 w-full max-w-xs -translate-x-1/2 border-3 px-3 text-center sm:bottom-10">
								&copy; 2026{" "}
								<a href="https://rackodo.dev" target="_blank">
									Rackodo
								</a>{" "}
								a.k.a.{" "}
								<a href="https://tumblr.com/blog/nukodi" target="_blank">
									Nukodi
								</a>
								. <br />
								All Rights Reserved.
							</footer>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
