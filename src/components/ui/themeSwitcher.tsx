"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const ThemeSwitcher = ({ className }: { className?: string }) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div
			className={`border-text grid h-10 grid-cols-[auto_1fr] items-center border-3 ${className || ""}`}
		>
			<div className="bg-background border-text h-full content-center border-r-3 px-2 font-bold select-none">
				Signed in as:
			</div>

			<div className="col-start-2 row-start-1 grid h-full w-full">
				<select
					value={theme}
					onChange={(e) => setTheme(e.target.value)}
					className="bg-text text-background col-start-1 row-start-1 block h-full w-full cursor-pointer appearance-none rounded-none border-none pr-8 pl-2 font-bold"
				>
					<option value="guest">Guest</option>
					<hr />
					<option value="root">Root</option>
					<option value="reggie">Reggie</option>
					<option value="goldie">Goldie</option>
					<option value="foxeye">Foxeye</option>
					<hr />
					<option value="chazikov">Atom</option>
				</select>

				<svg
					className="text-background pointer-events-none col-start-1 row-start-1 mr-2 h-4 w-4 self-center justify-self-end"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2.5"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
		</div>
	);
};

export default ThemeSwitcher;
