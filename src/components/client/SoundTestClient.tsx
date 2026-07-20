"use client";

import { useEffect, useRef, useState } from "react";

const SOUNDS = [
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
const TYPING_SPEED_MS = 100;

export default function SoundTestClient() {
	const [text, setText] = useState("");
	const audiosRef = useRef<HTMLAudioElement[]>([]);
	const lastAudioRef = useRef<number>(-1);
	const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		audiosRef.current = SOUNDS.map((src) => {
			const audio = new Audio(src);
			audio.preload = "auto";
			return audio;
		});

		return () => {
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
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current);
		}

		setText("");
		let currentCharacterIndex = 0;

		typingIntervalRef.current = setInterval(() => {
			if (currentCharacterIndex < SAMPLE_TEXT.length) {
				const nextChar = SAMPLE_TEXT[currentCharacterIndex];

				setText((prev) => prev + nextChar);

				if (nextChar !== " ") {
					playRandomSound();
				}

				currentCharacterIndex++;
			} else {
				if (typingIntervalRef.current) {
					clearInterval(typingIntervalRef.current);
					typingIntervalRef.current = null;
				}
			}
		}, TYPING_SPEED_MS);
	};

	return (
		<div className="flex flex-col gap-3">
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
