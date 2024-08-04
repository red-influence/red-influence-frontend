import Error404 from '@/components/Error404';
import { Service as ServiceType } from '@/types/sanity.types';
import { getServices, imageToUrl } from '@/utils/sanity';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const getStaticPaths = (async () => {
	const services = await getServices();

	const paths = services.map((service) => ({
		params: {
			slug: service.slug.current,
		},
	}));

	return {
		paths: paths,
		fallback: true, // false or "blocking"
	};
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
	const services = await getServices();

	return { props: { services } };
}) satisfies GetStaticProps<{
	services: ServiceType[];
}>;

export default function Service({
	services,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { slug } = router.query;

	const service = useMemo(
		() => services.find((service) => service.slug.current === slug),
		[slug]
	);

	return (
		<>
			{service ? (
				<div className="page-content">
					<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
						<h1 className="text-3xl md:text-6xl">{service.title}</h1>

						<p className="max-w-4xl text-md md:text-xl !leading-loose">
							{service.description}
						</p>

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
				</div>
			) : (
				<Error404 />
			)}
		</>
	);
}
