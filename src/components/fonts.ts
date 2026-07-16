import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	variable: "--font-rajdhani",
	weight: ["300", "400", "500", "600", "700"]
});

export const fonts = { rajdhani };
