"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export default function Home() {
	const { resolvedTheme: resolvedUser } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-2xl">LOADING THEME</p>
			</div>
		);
	}

	console.log(resolvedUser);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col items-center">
				<h1 className="text-accent">[{resolvedUser}@ares:/ERROR]</h1>
				<p className="text-2xl font-medium">
					Incomplete file data. Please try again later.
				</p>
			</div>
		</div>
	);
}
