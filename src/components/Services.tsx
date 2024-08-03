import { Service } from '@/types/sanity.types';

export default function Services({ items }: { items: Service[] }) {
	return (
		<div className="services bg-background px-5 md:px-0 section" id="services">
			<div className="py-20 flex flex-col gap-y-20 mx-auto" id="services">
				<div className="container mx-auto px-5 md:px-0">
					<h2 className="text-6xl ">Leistungen</h2>
				</div>

				<div className="flex flex-col gap-y-24">
					{items.map((service, index) => (
						<div
							className="container pt-10 border-t-medium border-t-primary mx-auto"
							key={index}
						>
							<div className="flex flex-col gap-y-10 max-w-4xl">
								<h3 className="text-4xl">{service.title}</h3>
								<p className="text-xl leading-loose">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
