import { Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import { Input, Textarea } from '@nextui-org/input';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Checkbox } from '@nextui-org/checkbox';
import { InlineWidget } from 'react-calendly';
import {
	Modal,
	ModalBody,
	ModalContent,
	useDisclosure,
} from '@nextui-org/modal';

function CalendlyWidget({ url }: { url: string }) {
	return (
		<InlineWidget
			url={url}
			pageSettings={{
				backgroundColor: '18181B',
				hideEventTypeDetails: true,
				hideLandingPageDetails: true,
				primaryColor: 'F30A49',
				textColor: 'DDE6ED',
			}}
			styles={{
				colorScheme: 'white',
				height: '600px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		/>
	);
}

export default function Contact({
	emailAddress,
	calendlyUrl,
}: {
	emailAddress: string;
	calendlyUrl: string | undefined;
}) {
	const [status, setStatus] = useState<string>('idle');
	const [error, setError] = useState<string | null>(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

		if (!isChecked) {
			setStatus('error');
			setError('Bitte Datenschutzerklärung akzeptieren');
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
				setError('Fehler beim Absenden aufgetreten');
			}
		} catch (e) {
			setStatus('error');
			setError('Unbekannter Fehler aufgetreten');
		}

		form.reset();
	};

	return (
		<div className="contact bg-background section" id="contact">
			<div className="container py-12 md:py-20 flex flex-col gap-y-10 mx-auto items-center px-5 md:px-0">
				<ScrollAnimation>
					<h2 className="text-3xl md:text-6xl">Kontaktiere uns jetzt</h2>
				</ScrollAnimation>

				{calendlyUrl && (
					<>
						<div className="flex gap-5 flex-col md:flex-row items-center">
							<Button onPress={onOpen} color="primary">
								Direkt Termimn buchen
							</Button>

							<p className="text-medium">oder eine Nachricht hinterlassen:</p>
						</div>

						<Modal
							isOpen={isOpen}
							onOpenChange={onOpenChange}
							className="calendly-modal self-center"
						>
							<ModalContent>
								{() => (
									<ModalBody className="!p-0">
										<CalendlyWidget url={calendlyUrl} />
									</ModalBody>
								)}
							</ModalContent>
						</Modal>
					</>
				)}

				<form
					className="w-full max-w-6xl flex flex-col gap-10 items-start"
					name="contact"
					onSubmit={handleFormSubmit}
					noValidate
				>
					<Input type="hidden" name="form-name" value="contact" />

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						<ScrollAnimation>
							<Input
								type="text"
								label="Vorname"
								name="vorname"
								size="lg"
								required
							/>
						</ScrollAnimation>
						<ScrollAnimation>
							<Input
								type="text"
								label="Nachname"
								name="nachname"
								size="lg"
								required
							/>
						</ScrollAnimation>
						<ScrollAnimation className="md:col-span-2">
							<Input
								type="email"
								label="Email"
								name="email"
								size="lg"
								required
							/>
						</ScrollAnimation>

						<ScrollAnimation className="md:col-span-2">
							<Textarea
								label="Nachricht"
								name="nachricht"
								minRows={8}
								size="lg"
								required
							/>
						</ScrollAnimation>

						<ScrollAnimation className="md:col-span-2">
							<Checkbox required onValueChange={(value) => setIsChecked(value)}>
								Ich habe die{' '}
								<Link
									href="/privacy"
									target="_blank"
									className="hover:underline"
								>
									Datenschutzerklärung
								</Link>{' '}
								zur Kenntnis genommen
							</Checkbox>
						</ScrollAnimation>
					</div>
					<ScrollAnimation>
						<Button type="submit">Nachricht absenden</Button>
					</ScrollAnimation>
				</form>

				{status === 'ok' && (
					<ScrollAnimation>
						<Chip size="lg" color="success">
							Nachricht erfolgreich zugestellt
						</Chip>
					</ScrollAnimation>
				)}

				{status === 'error' && (
					<ScrollAnimation>
						<Chip size="lg" color="danger">
							{error}
						</Chip>
					</ScrollAnimation>
				)}

				<ScrollAnimation>
					<Link
						href={`mailto:${emailAddress}`}
						className="text-medium md:text-xl"
					>
						Oder einfach per Mail.
					</Link>
				</ScrollAnimation>
			</div>
		</div>
	);
}
