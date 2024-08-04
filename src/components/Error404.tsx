import ScrollAnimation from 'react-animate-on-scroll';

export default function Error404() {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<h1 className="text-3xl md:text-6xl">
						404 - Diese Seite existiert nicht
					</h1>
				</ScrollAnimation>
			</div>
		</div>
	);
}
