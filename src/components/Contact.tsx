import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import Link from 'next/link';

export default function Contact() {
	return (
		<div className="contact bg-background section" id="contact">
			<div className="container py-20 flex flex-col gap-y-10 mx-auto items-center px-5 md:px-0">
				<h2 className="text-3xl md:text-6xl">Kontaktiere uns jetzt</h2>
				<form className="w-full max-w-6xl flex flex-col gap-10 items-start">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						<Input type="text" label="Vorname" size="lg" />
						<Input type="text" label="Nachname" size="lg" />
						<Input
							type="email"
							label="Email"
							className="md:col-span-2"
							size="lg"
						/>

						<Textarea
							label="Nachricht"
							className="md:col-span-2"
							minRows={8}
							size="lg"
						/>
					</div>
					<Button type="submit">Nachricht absenden</Button>
				</form>

				<Link href="mailto:mail@red-influence.com" className="text-xl">
					Oder einfach per Mail.
				</Link>
			</div>
		</div>
	);
}
