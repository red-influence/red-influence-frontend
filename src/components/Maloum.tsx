import { Maloum as Maloumtype } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Image } from '@nextui-org/image';
import { PortableText } from '@portabletext/react';
import ServiceGrid from './ServiceGrid';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Maloum({
	title,
	description,
	logo,
	grid,
}: {
	title: string;
	description: Maloumtype['description'];
	logo: Maloumtype['logo'];
	grid?: Maloumtype['grid'];
}) {
	return (
		<div className="bg-background section">
			<div className="container md:py-20 mx-auto section" id="maloum">
				<ScrollAnimation>
					<div
						className="maloum max-w-6xl flex flex-col gap-y-5 md:gap-y-10 mx-auto p-5 py-16 md:p-16 md:rounded-3xl"
						id="maloum"
					>
						<ScrollAnimation>
							<Link href="https://www.maloum.com/de" target="_blank">
								<Image
									alt="Maloum Logo"
									src={imageToUrl(logo).width(400).auto('format').url()}
									width={200}
									loading="lazy"
								/>
							</Link>
						</ScrollAnimation>

						<ScrollAnimation>
							<h2 className="text-3xl md:text-6xl">{title}</h2>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="max-w-4xl text-medium md:text-xl !leading-loose flex flex-col gap-y-7 pb-5 portable-text">
								<PortableText value={description as any} />
							</div>
						</ScrollAnimation>

						<ServiceGrid items={grid} />
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
}
