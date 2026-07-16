import ThemeSwitcher from "./components/theme-switcher";

export default function Home() {
	return (
		<div className="bg-background h-dvh sm:p-5">
			<div className="gridBg relative flex h-full w-full flex-1 flex-col items-center justify-center">
				<ThemeSwitcher className="absolute top-5 w-full max-w-xs" />
				<h1 className="text-accent">Missing File</h1>
				<h3>Check back later.</h3>
				<p className="bg-background border-text absolute bottom-5 w-fit border-3 px-3 text-center">
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
		</div>
	);
}
