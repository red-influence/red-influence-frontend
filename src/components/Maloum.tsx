import { Maloum as Maloumtype } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Image } from '@nextui-org/image';
import { PortableText } from '@portabletext/react';

export default function Maloum({
	title,
	description,
	logo,
}: {
	title: string;
	description: Maloumtype['description'];
	logo: Maloumtype['logo'];
}) {
	return (
		<div className="bg-background px-5 md:px-0 section">
			<div className="container py-12 md:py-20 mx-auto section" id="maloum">
				<div
					className="maloum max-w-6xl flex flex-col gap-y-10 mx-auto p-6 md:p-16 rounded-3xl"
					id="maloum"
				>
					<Image alt="Maloum Logo" src={imageToUrl(logo)} width={200} />

					<h2 className="text-3xl md:text-6xl">{title}</h2>
					<div className="max-w-4xl text-md md:text-xl !leading-loose flex flex-col gap-y-7">
						<PortableText value={description as any} />
					</div>
				</div>
			</div>
		</div>
	);
}
