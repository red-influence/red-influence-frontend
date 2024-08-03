import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { getAbout, getCaseStudies, getHero, getServices } from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const hero = await getHero();
	const about = await getAbout();
	const services = await getServices();
	const caseStudies = await getCaseStudies();

	return { props: { hero, about, services, caseStudies } };
}) satisfies GetStaticProps<{
	hero: any;
	about: any;
	services: any;
	caseStudies: any;
}>;

export default function Home({
	hero,
	about,
	services,
	caseStudies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<Hero {...hero} services={services} caseStudies={caseStudies} />
			<Services items={services} />
			<About {...about} />
			<Contact />
		</div>
	);
}
