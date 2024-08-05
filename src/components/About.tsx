import { PortableText } from '@portabletext/react';
import { About as AboutType, Person } from '@/types/sanity.types';
import { Image } from '@nextui-org/image';
import { imageToUrl } from '@/utils/sanity';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardBody } from '@nextui-org/card';

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
							/>
						</ScrollAnimation>
					</div>
				)}
			</div>

			<ScrollAnimation>
				<div className="flex gap-3 md:gap-6 flex-wrap">
					{persons.map((person, index) =>
						person.description ? (
							<Card
								className="py-4 bg-transparent md:bg-background/60 md:dark:bg-default-100/50 w-full md:max-w-2xl"
								shadow="none"
								isBlurred
								key={index}
							>
								<CardBody className="overflow-visible py-2 flex flex-col md:flex-row gap-5 items-center md:items-start">
									<Image
										alt={person.title}
										className="object-cover rounded-xl max-w-52"
										src={imageToUrl(person.image).height(500).url()}
										width={200}
										height={250}
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
									</div>
								</CardBody>
							</Card>
						) : null
					)}
				</div>
			</ScrollAnimation>
		</div>
	);
}
