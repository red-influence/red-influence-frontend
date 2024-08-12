import { Person } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import ScrollAnimation from './ScrollAnimation';
import Socials from './Socials';

export default function PersonBox({ person }: { person: Person }) {
	return (
		<ScrollAnimation>
			<Card
				className="py-4 bg-transparent md:bg-background/60 md:dark:bg-default-100/50 w-full md:max-w-2xl md:backdrop-blur-md md:backdrop-saturate-150 h-full"
				shadow="none"
			>
				<CardBody className="overflow-visible py-2 flex flex-col md:flex-row gap-5 items-center md:items-start">
					<Image
						alt={person.title}
						className="object-cover rounded-xl max-w-52"
						src={imageToUrl(person.image)
							.height(300)
							.auto('format')
							.quality(70)
							.url()}
						width={200}
						height={250}
						loading="lazy"
					/>

					<div className="flex flex-col gap-5 items-center md:items-start">
						<div className="flex flex-col gap-2">
							<h3 className="text-lg md:text-xl text-center md:text-left">
								{person.title}
							</h3>
							<h4 className="text-sm md:text-medium text-center md:text-left">
								{person.position}
							</h4>
						</div>

						<p className="text-medium md:text-lg !leading-loose flex flex-col gap-y-7 md:pe-5 text-center md:text-left">
							{person.description}
						</p>

						{person.socials && (
							<div className="opacity-60">
								<Socials items={person.socials} />
							</div>
						)}
					</div>
				</CardBody>
			</Card>
		</ScrollAnimation>
	);
}
