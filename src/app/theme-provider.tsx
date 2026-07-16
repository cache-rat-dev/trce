"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextThemesProvider
			attribute="data-theme"
			defaultTheme="neutral"
			value={{ neutral: "neutral", reggie: "reggie" }}
		>
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
