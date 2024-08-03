import { getSiteSettings } from '@/utils/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const siteSettings = await getSiteSettings();
	return { props: { siteSettings } };
}) satisfies GetStaticProps<{
	siteSettings: any;
}>;

export default function Imprint({
	siteSettings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<div className="container mx-auto flex flex-col gap-y-20 py-20">
				<h1 className="text-6xl ">Impressum</h1>

				<div className="max-w-4xl text-xl leading-loose flex flex-col gap-5">
					<PortableText value={siteSettings.imprint as any} />
				</div>
			</div>
		</div>
	);
}
