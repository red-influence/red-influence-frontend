import Error404 from '@/components/Error404';
import { Service as ServiceType } from '@/types/sanity.types';
import { getServices } from '@/utils/sanity';
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
					</div>
				</div>
			) : (
				<Error404 />
			)}
		</>
	);
}
