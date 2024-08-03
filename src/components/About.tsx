import { PortableText } from '@portabletext/react';

export default function About({
	title,
	description,
}: {
	title: string;
	description: any[];
}) {
	return (
		<div className="container py-20 flex flex-col gap-y-20 mx-auto" id="about">
			<h2 className="text-6xl">{title}</h2>
			<div className="max-w-4xl text-xl leading-loose flex flex-col gap-y-10">
				<PortableText value={description} />
			</div>
		</div>
	);
}
