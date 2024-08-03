import { getSiteSettings } from '@/utils/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = await getSiteSettings();
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: any;
}>;

export default function Privacy({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-20 py-12 md:py-20 px-5 md:px-0">
				<h1 className="text-3xl md:text-6xl">Datenschutzerklärung</h1>

				<div className="max-w-4xl text-xl leading-loose flex flex-col gap-5">
					<PortableText value={siteSettings.privacy as any} />
				</div>
			</div>
		</div>
	);
}
