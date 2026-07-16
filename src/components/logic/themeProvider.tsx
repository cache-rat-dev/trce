"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextThemesProvider
			attribute="data-theme"
			defaultTheme="neutral"
			value={{
				neutral: "neutral",
				root: "root",
				reggie: "reggie",
				goldie: "goldie",
				foxeye: "foxeye",
				atom: "atom"
			}}
		>
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
