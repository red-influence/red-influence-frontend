import { Person } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

export default function PersonBox({ person }: { person: Person }) {
	return (
		<ScrollAnimation>
			<Card
				className="py-4 bg-transparent md:bg-background/60 md:dark:bg-default-100/50 w-full md:max-w-2xl"
				shadow="none"
				isBlurred
			>
				<CardBody className="overflow-visible py-2 flex flex-col md:flex-row gap-5 items-center md:items-start">
					<Image
						alt={person.title}
						className="object-cover rounded-xl max-w-52"
						src={imageToUrl(person.image).height(300).auto('format').url()}
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
							<div className="flex gap-y-2 gap-x-5 flex-wrap">
								{person.socials.map((social, index) => (
									<div
										className="flex gap-1 hover:underline items-center opacity-60"
										key={index}
									>
										<Image
											alt={social.type}
											src={`/${social.type.toLowerCase()}.svg`}
											width={30}
											height={30}
											loading="lazy"
										/>

										<Link href={social.url} target="_blank">
											{social.type}
										</Link>
									</div>
								))}
							</div>
						)}
					</div>
				</CardBody>
			</Card>
		</ScrollAnimation>
	);
}
