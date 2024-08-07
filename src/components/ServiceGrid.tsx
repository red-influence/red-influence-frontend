import { Service } from '@/types/sanity.types';
import { imageToUrl } from '@/utils/sanity';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import clsx from 'clsx';
import { useMemo } from 'react';

export default function ServiceGrid({
	items,
	isFull = false,
}: {
	items: Service['grid'];
	isFull?: boolean;
}) {
	const hasMore = useMemo(
		() => (items && !isFull ? items.length > 6 : false),
		[items, isFull]
	);

	const reducedItems = useMemo(
		() => (hasMore ? items?.filter((item, index) => index < 5) : undefined),
		[items, hasMore, isFull]
	);

	const moreCount = useMemo(
		() =>
			reducedItems && items ? items.length - reducedItems.length : undefined,
		[reducedItems]
	);

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
					{(reducedItems ?? items).map((item, index) => (
						<ScrollAnimation key={index}>
							<Card
								className={clsx(
									'py-4 flex items-center gap-4 bg-background/60 dark:bg-default-100/50 w-full h-full',
									{
										'max-w-6xl md:max-w-52 flex-col p-6 md:w-60': !isFull,
										'md:max-w-4xl md:flex-row md:items-start px-3': isFull,
									}
								)}
								isBlurred
								shadow="none"
							>
								<Image
									alt={item.title}
									className={clsx('rounded-xl', {
										'w-16 h-16 md:w-24 md:h-24 shrink-0 p-2 md:p-4': isFull,
										'max-w-16 max-h-16 md:max-w-24 md:max-h-24 shrink-0 p-1 md:p-2':
											!isFull,
									})}
									src={imageToUrl(item.icon)
										.width(300)
										.auto('format')
										.quality(70)
										.url()}
									width={300}
									loading="lazy"
								/>
								<div className="flex flex-col gap-5 flex-1">
									<span
										className={clsx('', {
											'text-sm md:text-lg text-center': !isFull,
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

					{hasMore && (
						<ScrollAnimation className="flex-1">
							<Card
								className={clsx(
									'py-4 flex items-center gap-4 bg-background/60 dark:bg-default-100/50 w-full h-full max-w-6xl md:max-w-52 flex-col p-6 justify-center opacity-70'
								)}
								isBlurred
								shadow="none"
							>
								<div className="flex gap-4 items-center justify-center">
									<Image
										alt="+"
										className="rounded-xl"
										src="/plus.svg"
										width={30}
										loading="lazy"
									/>

									<span className="text-medium md:text-lg text-center">
										{moreCount} mehr
									</span>
								</div>
							</Card>
						</ScrollAnimation>
					)}
				</div>
			)}
		</>
	);
}
