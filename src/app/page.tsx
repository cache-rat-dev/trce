import ThemeSwitcher from "./components/theme-switcher";

export default function Home() {
	return (
		<div className="bg-background flex flex-1 flex-col items-center justify-center">
			<ThemeSwitcher className="absolute top-5 left-[50%] -translate-x-[50%]" />
			<h1 className="text-accent">Missing File</h1>
			<h3>Check back later.</h3>
			<p className="absolute bottom-5 w-full text-center">
				&copy; 2026{" "}
				<a href="https://rackodo.dev" target="_blank">
					Rackodo
				</a>{" "}
				a.k.a.{" "}
				<a href="https://tumblr.com/blog/nukodi" target="_blank">
					Nukodi
				</a>
				. All Rights Reserved.{" "}
			</p>
		</div>
	);
}
