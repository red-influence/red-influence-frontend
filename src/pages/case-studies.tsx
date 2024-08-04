import { SiteSettings } from '@/types/sanity.types';
import { getSiteSettings } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = await getSiteSettings();
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: SiteSettings;
}>;

export default function CaseStudies({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
				<h1 className="text-3xl md:text-6xl">Case Studies</h1>
			</div>
		</div>
	);
}
