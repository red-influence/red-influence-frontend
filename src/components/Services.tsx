import { Service } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import Link from 'next/link';

export default function Services({ items }: { items: Service[] }) {
	return (
		<div className="services bg-background px-5 md:px-0 section" id="services">
			<div
				className="py-12 md:py-20 flex flex-col gap-y-10 mx-auto"
				id="services"
			>
				<div className="container mx-auto">
					<h2 className="text-3xl md:text-6xl">Leistungen</h2>
				</div>

				<div className="flex flex-col gap-y-24">
					{items.map((service, index) => (
						<div
							className="container pt-10 border-t-medium border-t-primary mx-auto grid md:grid-cols-2 gap-12 md:gap-20"
							key={index}
						>
							<div className="flex flex-col gap-y-10 max-w-4xl items-start">
								<h3 className="text-2xl md:text-4xl">{service.title}</h3>
								<p className="text-md md:text-xl !leading-loose">
									{service.description}
								</p>
								<Button as={Link} href={`/services/${service.slug.current}`}>
									Mehr über {service.title} erfahren
								</Button>
							</div>

							{service.grid && (
								<div className="grid grid-cols-2 gap-3 md:gap-6 items-start justify-start md:flex flex-wrap">
									{service.grid.map((item, index) => (
										<Card
											key={index}
											className="py-4 bg-background/60 dark:bg-default-100/50 w-full md:max-w-52 flex flex-col items-center p-6 gap-4"
											shadow="none"
											isBlurred
										>
											<Image
												alt={item.title}
												className="object-cover rounded-xl"
												src={imageToUrl(item.icon)}
												width="100%"
											/>
											<h4 className="text-lg md:text-x">{item.title}</h4>
										</Card>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
