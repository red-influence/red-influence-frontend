import { CaseStudy } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import Link from 'next/link';

export default function CaseStudiesGrid({
	items,
	showAllButton = false,
}: {
	items: (CaseStudy & { service: { title: string } })[];
	showAllButton?: boolean;
}) {
	return (
		<div className=" w-auto flex flex-col items-start gap-10">
			<div className="flex gap-10 flex-wrap">
				{items.map((item, index) => (
					<Link
						href={`/case-studies/${item.slug?.current}`}
						target="_blank"
						key={index}
					>
						<Card
							className="py-4 bg-background/60 dark:bg-default-100/50 w-full md:max-w-80"
							shadow="none"
							isBlurred
						>
							<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
								<small className="text-default-500">{item.service.title}</small>
								<h4 className="font-bold text-large">{item.title}</h4>
							</CardHeader>
							<CardBody className="overflow-visible py-2">
								<Image
									alt={`${item.title} Case Study`}
									className="object-cover rounded-xl"
									src={
										item.thumbnail
											? imageToUrl(item.thumbnail)
													.width(400)
													.auto('format')
													.url()
											: '/placeholder.webp'
									}
									width={400}
									height={200}
									loading="lazy"
								/>
							</CardBody>
						</Card>
					</Link>
				))}
			</div>

			{showAllButton && (
				<Button as={Link} href="/case-studies">
					Alle Case Studies ansehen
				</Button>
			)}
		</div>
	);
}
