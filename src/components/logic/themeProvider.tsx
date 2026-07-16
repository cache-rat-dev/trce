"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextThemesProvider
			attribute="data-user"
			defaultTheme="neutral"
			value={{
				guest: "guest",
				root: "root",
				reggie: "reggie",
				goldie: "goldie",
				foxeye: "foxeye",
				chazikov: "chazikov"
			}}
		>
			{children}
		</NextThemesProvider>
	);
};

export default ThemeProvider;
