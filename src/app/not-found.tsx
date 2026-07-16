"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-accent">404 Not Found</h1>
				<p className="text-2xl font-medium">
					The path <span className="text-accent font-black">{pathname}</span>{" "}
					doesn't exist.
				</p>
				<p className="text-2xl font-medium">
					<a href="/">Let's go home.</a>
				</p>
			</div>
		</div>
	);
}
