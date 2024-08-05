import Error404 from '@/components/Error404';
import { CaseStudy } from '@/types/sanity.types';
import { getCaseStudies, imageToUrl } from '@/utils/sanity';
import { Image } from '@nextui-org/image';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const getStaticPaths = (async () => {
	const caseStudies = await getCaseStudies();

	const paths = caseStudies.map((caseStudy) => ({
		params: {
			slug: caseStudy.slug.current,
		},
	}));

	return {
		paths: paths,
		fallback: true, // false or "blocking"
	};
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
	const caseStudies = await getCaseStudies();

	return { props: { caseStudies } };
}) satisfies GetStaticProps<{
	caseStudies: (CaseStudy & { service: { title: string } })[];
}>;

export default function Service({
	caseStudies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { slug } = router.query;

	const caseStudy = useMemo(
		() =>
			caseStudies
				? caseStudies.find((caseStudy) => caseStudy.slug.current === slug)
				: undefined,
		[slug, caseStudies]
	);

	return (
		<div className="page-content">
			{caseStudy ? (
				<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<h2 className="text-3xl md:text-6xl">{caseStudy.title}</h2>
					</ScrollAnimation>
					<div className="grid md:grid-flow-col gap-12 md:gap-20 items-center">
						{caseStudy.description && (
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<div className="flex flex-col gap-y-10">
									<p className="max-w-4xl text-md md:text-xl !leading-loose flex flex-col gap-y-7">
										{caseStudy.description}
									</p>
								</div>
							</ScrollAnimation>
						)}

						{caseStudy.thumbnail && (
							<div>
								<ScrollAnimation animateIn="fadeIn" animateOnce>
									<Image
										alt="Location"
										className="object-cover rounded-xl max-w-4xl max-h-screen"
										src={imageToUrl(caseStudy.thumbnail)}
										width="100%"
									/>
								</ScrollAnimation>
							</div>
						)}
					</div>
				</div>
			) : (
				<Error404 />
			)}
		</div>
	);
}
