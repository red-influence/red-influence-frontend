export default function Footer({ copyright }: { copyright: string }) {
	return (
		<div className="banner w-full h-32 bg-background">
			<div className="container mx-auto flex items-center justify-between gap-4">
				<span>
					© {new Date().getFullYear()} {copyright}
				</span>
			</div>
		</div>
	);
}
