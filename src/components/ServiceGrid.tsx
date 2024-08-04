import { Service } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

export default function ServiceGrid({ items }: { items: Service['grid'] }) {
	return (
		<>
			{items && (
				<div className="grid grid-cols-2 gap-3 md:gap-6 justify-start md:flex flex-wrap h-max">
					{items.map((item, index) => (
						<Card
							key={index}
							className="py-4 bg-background/60 dark:bg-default-100/50 w-full md:max-w-52 flex flex-col items-center p-6 gap-4"
							shadow="none"
							isBlurred
						>
							<Image
								alt={item.title}
								className="rounded-xl"
								src={imageToUrl(item.icon)}
								width={10000}
							/>
							<h4 className="text-lg md:text-x text-center">{item.title}</h4>
						</Card>
					))}
				</div>
			)}
		</>
	);
}
