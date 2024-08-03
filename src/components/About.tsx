import { PortableText } from '@portabletext/react';
import { About as AboutType } from '@/types/sanity.types';

export default function About({
	title,
	description,
}: {
	title: string;
	description: AboutType['description'];
}) {
	return (
		<div
			className="container py-12 md:py-20 flex flex-col gap-y-10 mx-auto px-5 md:px-0 section"
			id="about"
		>
			<h2 className="text-3xl md:text-6xl">{title}</h2>
			<div className="max-w-4xl text-xl leading-loose flex flex-col gap-y-10">
				<PortableText value={description as any} />
			</div>
		</div>
	);
}
