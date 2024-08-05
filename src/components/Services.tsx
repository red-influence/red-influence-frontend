import { Service } from '@/types/sanity.types';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import ServiceGrid from './ServiceGrid';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services({ items }: { items: Service[] }) {
	console.log(items);

	return (
		<div className="services bg-background px-5 md:px-0 section" id="services">
			<div
				className="py-12 md:py-20 flex flex-col gap-y-10 mx-auto"
				id="services"
			>
				<div className="container mx-auto">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
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
								<ScrollAnimation animateIn="fadeIn" animateOnce>
									<h3 className="text-2xl md:text-4xl">{service.title}</h3>
								</ScrollAnimation>

								<ScrollAnimation animateIn="fadeIn" animateOnce>
									<p className="text-md md:text-xl !leading-loose">
										{service.teaser}
									</p>
								</ScrollAnimation>

								<ScrollAnimation animateIn="fadeIn" animateOnce>
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
