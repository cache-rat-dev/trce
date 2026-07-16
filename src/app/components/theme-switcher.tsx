"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const ThemeSwitcher = ({ className }: { className?: string }) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<select
			value={theme}
			onChange={(e) => setTheme(e.target.value)}
			className={`bg-text text-background w-full max-w-xs rounded border p-2 font-bold ${className ? className : ""}`}
		>
			<option value="neutral">Neutral</option>
			<option value="reggie">Reggie</option>
		</select>
	);
};

export default ThemeSwitcher;
