"use client";

import { useEffect, useRef, useState } from "react";

import { Metadata } from "next";

const sounds = [
	"/typeSounds/blip_0.wav",
	"/typeSounds/blip_1.wav",
	"/typeSounds/blip_2.wav",
	"/typeSounds/blip_3.wav",
	"/typeSounds/blip_4.wav",
	"/typeSounds/blip_5.wav",
	"/typeSounds/blip_6.wav",
	"/typeSounds/blip_7.wav",
	"/typeSounds/blip_8.wav",
	"/typeSounds/blip_9.wav"
];

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog.";
const TYPING_SPEED_MS = 100; // Time delay between each letter

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

export default function SoundTest() {
	const [text, setText] = useState("");
	const audiosRef = useRef<HTMLAudioElement[]>([]);
	const lastAudioRef = useRef<number>(-1);

	// Track the active interval ID so we can cancel it if needed
	const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		audiosRef.current = sounds.map((src) => {
			const audio = new Audio(src);
			audio.preload = "auto";
			return audio;
		});

		return () => {
			// Clear any running typewriter intervals when unmounting
			if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

			audiosRef.current.forEach((audio) => {
				audio.pause();
				audio.src = "";
			});
		};
	}, []);

	const playRandomSound = () => {
		const instances = audiosRef.current;
		if (instances.length === 0) return;

		let nextIndex = 0;

		if (instances.length > 1) {
			do {
				nextIndex = Math.floor(Math.random() * instances.length);
			} while (nextIndex === lastAudioRef.current);
		}

		lastAudioRef.current = nextIndex;

		const templateAudio = instances[nextIndex];
		const clonedAudio = templateAudio.cloneNode(true) as HTMLAudioElement;

		clonedAudio.play().catch((err) => {
			console.warn(
				"Audio playback delayed until user interacts with the page:",
				err
			);
		});
	};

	const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		// If the user starts typing manually, stop the automated typewriter simulation
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current);
			typingIntervalRef.current = null;
		}
		setText(e.target.value);
		playRandomSound();
	};

	const handleClear = () => {
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current);
			typingIntervalRef.current = null;
		}
		setText("");
		playRandomSound();
	};

	const handleUseSample = () => {
		// Reset any previous typing loops that might be running
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current);
		}

		setText(""); // Clear current text to start fresh
		let currentCharacterIndex = 0;

		typingIntervalRef.current = setInterval(() => {
			if (currentCharacterIndex < SAMPLE_TEXT.length) {
				const nextChar = SAMPLE_TEXT[currentCharacterIndex];

				// Append character to state using functional update to get freshest value
				setText((prev) => prev + nextChar);

				// Play the sound if the character isn't a plain spacebar blank gap
				if (nextChar !== " ") {
					playRandomSound();
				}

				currentCharacterIndex++;
			} else {
				// Clean up interval when string reaches the end
				if (typingIntervalRef.current) {
					clearInterval(typingIntervalRef.current);
					typingIntervalRef.current = null;
				}
			}
		}, TYPING_SPEED_MS);
	};

	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-accent">Typing Sound Test</h1>
			<textarea
				className="bg-background border-text min-h-[120px] border-3 p-2"
				value={text}
				onChange={handleInput}
			/>
			<div className="flex gap-3">
				<button
					className="bg-text text-background flex-1 py-1 transition-opacity hover:opacity-90"
					onClick={handleClear}
				>
					Clear
				</button>
				<button
					className="bg-text text-background flex-1 py-1 transition-opacity hover:opacity-90"
					onClick={handleUseSample}
				>
					Use Sample
				</button>
			</div>
		</div>
	);
}
