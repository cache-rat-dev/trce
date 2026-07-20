import SoundTestClient from "@/components/client/SoundTestClient";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sound Test - TRACEBACK",
	description: "Testing playing sounds when typing.",
	openGraph: {
		title: "Sound Test",
		description: "Testing playing sounds when typing.",
		images: [
			{
				url: "https://trce.rackodo.dev/trce_favicon.png",
				width: 80,
				height: 80,
				alt: "TRACEBACK Logo"
			}
		],
		url: "https://trce.rackodo.dev/sound_test",
		siteName: "TRACEBACK"
	},
	twitter: { card: "summary" },
	other: { "theme-color": "#004A80" }
};

export default function SoundTestPage() {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-accent">Typing Sound Test</h1>
			<SoundTestClient />
		</div>
	);
}
