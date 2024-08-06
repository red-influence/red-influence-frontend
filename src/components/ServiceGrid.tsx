import { Service } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import clsx from 'clsx';

export default function ServiceGrid({
	items,
	isFull = false,
}: {
	items: Service['grid'];
	isFull?: boolean;
}) {
	return (
		<>
			{items && (
				<div
					className={clsx(
						'service-grid grid gap-3 md:gap-6 justify-start h-max',
						{
							'md:flex flex-wrap grid-cols-2': !isFull,
							'xl:grid-cols-2': isFull,
						}
					)}
				>
					{items.map((item, index) => (
						<ScrollAnimation key={index}>
							<Card
								className={clsx(
									'py-4 flex items-center gap-4 bg-background/60 dark:bg-default-100/50 w-full h-full',
									{
										'max-w-6xl md:max-w-52 flex-col p-6': !isFull,
										'md:max-w-4xl md:flex-row md:items-start px-3': isFull,
									}
								)}
								isBlurred
								shadow="none"
							>
								<Image
									alt={item.title}
									className={clsx('rounded-xl', {
										'w-16 h-16 md:w-32 md:h-32 shrink-0': isFull,
									})}
									src={imageToUrl(item.icon)
										.width(500)
										.auto('format')
										.quality(70)
										.url()}
									width={500}
									loading="lazy"
								/>
								<div className="flex flex-col gap-5 flex-1 ">
									<span
										className={clsx('', {
											'text-medium md:text-lg text-center': !isFull,
											'text-xl md:text-2xl text-center md:text-left': isFull,
										})}
									>
										{item.title}
									</span>

									{item.description && isFull && (
										<p className="text-medium md:text-xl !leading-loose text-center md:text-left">
											{item.description}
										</p>
									)}
								</div>
							</Card>
						</ScrollAnimation>
					))}
				</div>
			)}
		</>
	);
}
