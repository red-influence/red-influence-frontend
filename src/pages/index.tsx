import { getSiteSettings } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = await getSiteSettings();
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: any;
}>;

export default function Home({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(siteSettings);

	return (
		<div>
			<h1>{siteSettings.title}</h1>
		</div>
	);
}
