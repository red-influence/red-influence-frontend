import { Service } from '@/types/sanity.types';

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
							className="container pt-10 border-t-medium border-t-primary mx-auto"
							key={index}
						>
							<div className="flex flex-col gap-y-10 max-w-4xl">
								<h3 className="text-2xl md:text-4xl">{service.title}</h3>
								<p className="text-md md:text-xl !leading-loose">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
