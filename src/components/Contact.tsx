import { Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import { Input, Textarea } from '@nextui-org/input';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Contact() {
	const [status, setStatus] = useState<string>('idle');
	const [error, setError] = useState<string | null>(null);

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;

		const valid = form.checkValidity();

		if (!valid) {
			form.reportValidity();
			setStatus('error');
			setError('Bitte Formular vollständig ausfüllen');
			return;
		}

		try {
			setStatus('pending');
			setError(null);

			const formData = new FormData(form);

			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData as any).toString(),
			});

			if (res.status === 200) {
				setStatus('ok');
			} else {
				setStatus('error');
				setError('Es ist Fehler beim Absenden aufgetreten');
			}
		} catch (e) {
			setStatus('error');
			setError('Es ist ein unbekannter Fehler aufgetreten');
		}

		form.reset();
	};

	return (
		<div className="contact bg-background section" id="contact">
			<div className="container py-20 flex flex-col gap-y-10 mx-auto items-center px-5 md:px-0">
				<h2 className="text-3xl md:text-6xl">Kontaktiere uns jetzt</h2>

				<form
					className="w-full max-w-6xl flex flex-col gap-10 items-start"
					name="contact"
					onSubmit={handleFormSubmit}
					noValidate
				>
					<Input type="hidden" name="form-name" value="contact" />

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						<Input
							type="text"
							label="Vorname"
							name="vorname"
							size="lg"
							required
						/>
						<Input
							type="text"
							label="Nachname"
							name="nachname"
							size="lg"
							required
						/>
						<Input
							type="email"
							label="Email"
							name="email"
							className="md:col-span-2"
							size="lg"
							required
						/>

						<Textarea
							label="Nachricht"
							name="nachricht"
							className="md:col-span-2"
							minRows={8}
							size="lg"
							required
						/>
					</div>
					<Button type="submit">Nachricht absenden</Button>
				</form>

				{status === 'ok' && (
					<Chip size="lg" color="success">
						Nachricht erfolgreich zugestellt
					</Chip>
				)}

				{status === 'error' && (
					<Chip size="lg" color="danger">
						{error}
					</Chip>
				)}

				<Link href="mailto:mail@red-influence.com" className="text-xl">
					Oder einfach per Mail.
				</Link>
			</div>
		</div>
	);
}
