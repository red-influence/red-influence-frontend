import { SiteSettings } from '@/types/sanity.types';
import { getSiteSettings } from '@/utils/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = await getSiteSettings();
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: SiteSettings;
}>;

export default function Imprint({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-10 py-12 md:py-20 px-5 md:px-0">
				<h1 className="text-6xl ">Impressum</h1>

				<div className="max-w-4xl text-medium md:text-xl !leading-loose flex flex-col gap-5 portable-text">
					<PortableText value={siteSettings.imprint as any} />
				</div>
			</div>
		</div>
	);
}
