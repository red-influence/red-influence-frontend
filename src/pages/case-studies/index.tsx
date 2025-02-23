import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import { CaseStudy } from '@/types/sanity.types';
import { getCaseStudies } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ScrollAnimation from '@/components/ScrollAnimation';

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
				<ScrollAnimation>
					<h1 className="text-3xl md:text-6xl">Case Studies</h1>
				</ScrollAnimation>

				{caseStudies && (
					<ScrollAnimation>
						<CaseStudiesGrid items={caseStudies} />
					</ScrollAnimation>
				)}
			</div>
		</div>
	);
}
