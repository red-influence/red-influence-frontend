export default function Error404() {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
				<h1 className="text-3xl md:text-6xl">
					404 - Diese Seite existiert nicht
				</h1>

				<div className="max-w-4xl text-md md:text-xl !leading-loose flex flex-col gap-5"></div>
			</div>
		</div>
	);
}
