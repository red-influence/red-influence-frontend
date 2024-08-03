import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import Link from 'next/link';

export default function Contact() {
	return (
		<div className="contact bg-background section" id="contact">
			<div className="container py-20 flex flex-col gap-y-20 mx-auto items-center px-5 md:px-0">
				<h2 className="text-6xl">Kontaktiere uns jetzt</h2>
				<div className="w-full max-w-6xl flex flex-col gap-10 items-start">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						<Input type="text" label="Vorname" />
						<Input type="text" label="Nachname" />
						<Input type="email" label="Email" className="md:col-span-2" />

						<Textarea label="Nachricht" className="md:col-span-2" minRows={8} />
					</div>
					<Button>Nachricht absenden</Button>
				</div>

				<Link href="mailto:mail@red-influence.com" className="text-xl">
					Oder einfach per Mail.
				</Link>
			</div>
		</div>
	);
}
