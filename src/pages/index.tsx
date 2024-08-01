import { getSiteSettings } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = null;
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: any;
}>;

export default function Home({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(siteSettings);

	return <div className="page-content">Hallo Welt!</div>;
}
