import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import { CaseStudy, SiteSettings } from '@/types/sanity.types';
import { getCaseStudies, getSiteSettings } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ScrollAnimation from 'react-animate-on-scroll';

export const getStaticProps = (async (context) => {
	const caseStudies = await getCaseStudies();
	return { props: { caseStudies } };
}) satisfies GetStaticProps<{
	caseStudies: (CaseStudy & { service: { title: string } })[];
}>;

export default function CaseStudies({
	caseStudies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<h1 className="text-3xl md:text-6xl">Case Studies</h1>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<CaseStudiesGrid items={caseStudies} />
				</ScrollAnimation>
			</div>
		</div>
	);
}
