import { getContent } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const content = await getContent();
	return { props: { content } };
}) satisfies GetStaticProps<{
	content: any;
}>;

export default function Home({
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(content);

	return (
		<div>
			<h1>Hallo Welt!</h1>
		</div>
	);
}
