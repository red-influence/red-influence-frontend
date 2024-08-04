import { PortableText } from '@portabletext/react';
import { About as AboutType } from '@/types/sanity.types';
import { Image } from '@nextui-org/image';
import { imageToUrl } from '@/utils/sanity';

export default function About({
	title,
	description,
	image,
}: {
	title: string;
	description: AboutType['description'];
	image?: AboutType['image'];
}) {
	return (
		<div
			className="container py-12 md:py-20 mx-auto px-5 md:px-0 section grid md:grid-flow-col gap-12 md:gap-20 items-center"
			id="about"
		>
			<div className="flex flex-col gap-y-10">
				<h2 className="text-3xl md:text-6xl">{title}</h2>
				<div className="max-w-4xl text-md md:text-xl !leading-loose flex flex-col gap-y-7">
					<PortableText value={description as any} />
				</div>
			</div>

			{image && (
				<div>
					<Image
						alt="Location"
						className="object-cover rounded-xl"
						src={imageToUrl(image)}
						width="100%"
					/>
				</div>
			)}
		</div>
	);
}
