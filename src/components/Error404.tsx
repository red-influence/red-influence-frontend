import { Button } from '@nextui-org/button';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Error404() {
	return (
		<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
			<ScrollAnimation>
				<h1 className="text-3xl md:text-6xl">
					404 - Diese Seite existiert nicht
				</h1>
			</ScrollAnimation>

			<ScrollAnimation>
				<Button as={Link} href="/">
					Zurück zur Startseite
				</Button>
			</ScrollAnimation>
		</div>
	);
}
