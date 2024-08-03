import { getSiteSettings } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = null;
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: any;
}>;

export default function Test({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div className="page-content">Test</div>;
}
