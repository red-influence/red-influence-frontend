import { PortableText } from '@portabletext/react';
import { About as AboutType, Person } from '@/types/sanity.types';
import { Image } from '@nextui-org/image';
import { imageToUrl } from '@/utils/sanity';
import ScrollAnimation from '@/components/ScrollAnimation';
import PersonBox from './PersonBox';

export default function About({
	title,
	description,
	image,
	persons,
}: {
	title: string;
	description: AboutType['description'];
	image?: AboutType['image'];
	persons: Person[];
}) {
	return (
		<div
			className="container py-12 md:py-20 mx-auto px-5 md:px-0 section flex flex-col gap-12 md:gap-20"
			id="about"
		>
			<div className="grid md:grid-flow-col gap-12 md:gap-20 items-center">
				<div className="flex flex-col gap-y-10">
					<ScrollAnimation>
						<h2 className="text-3xl md:text-6xl">{title}</h2>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="max-w-4xl text-medium md:text-xl !leading-loose flex flex-col gap-y-7 portable-text">
							<PortableText value={description as any} />
						</div>
					</ScrollAnimation>
				</div>

				{image && (
					<div>
						<ScrollAnimation>
							<Image
								alt="Location"
								className="object-cover rounded-xl"
								src={imageToUrl(image).width(500).url()}
								width="100%"
								loading="lazy"
							/>
						</ScrollAnimation>
					</div>
				)}
			</div>

			<div className="flex gap-3 md:gap-6 flex-wrap">
				{persons.map((person, index) =>
					person.description ? <PersonBox person={person} key={index} /> : null
				)}
			</div>
		</div>
	);
}
