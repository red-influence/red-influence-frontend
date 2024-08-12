import { Person, Service } from '@/types/sanity.types';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import ServiceGrid from './ServiceGrid';
import ScrollAnimation from '@/components/ScrollAnimation';
import { User } from '@nextui-org/user';
import { imageToUrl } from '@/utils/sanity';

export default function Services({
	items,
}: {
	items: (Service & { persons: Person[] })[];
}) {
	return (
		<div className="services bg-background px-5 md:px-0 section" id="services">
			<div
				className="py-12 md:py-20 flex flex-col gap-y-10 mx-auto"
				id="services"
			>
				<div className="container mx-auto">
					<ScrollAnimation>
						<h2 className="text-3xl md:text-6xl">Leistungen</h2>
					</ScrollAnimation>
				</div>

				<div className="flex flex-col gap-y-16 md:gap-y-24">
					{items.map((service, index) => (
						<div
							className="container pt-10 border-t-medium border-t-primary mx-auto grid md:grid-cols-2 gap-12 md:gap-20"
							key={index}
						>
							<div className="flex flex-col gap-y-10 max-w-4xl items-start">
								<ScrollAnimation>
									<h3 className="text-2xl md:text-4xl">{service.title}</h3>
								</ScrollAnimation>

								<ScrollAnimation>
									<p className="text-medium md:text-xl !leading-loose">
										{service.teaser}
									</p>
								</ScrollAnimation>

								{service.persons && (
									<ScrollAnimation>
										<div className=" flex gap-y-5 gap-x-10 flex-wrap pb-3">
											{service.persons.map((person: Person, index) => (
												<User
													key={index}
													name={person.title}
													description={person.position}
													avatarProps={{
														src: imageToUrl(person.image)
															.width(100)
															.auto('format')
															.url(),
													}}
												/>
											))}
										</div>
									</ScrollAnimation>
								)}

								<ScrollAnimation>
									<Button
										as={Link}
										href={`/services/${service.slug.current}`}
										target="_blank"
									>
										Mehr über {service.title}
									</Button>
								</ScrollAnimation>
							</div>

							<ServiceGrid items={service.grid} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
