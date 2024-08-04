import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Maloum from '@/components/Maloum';
import Services from '@/components/Services';
import {
	About as AboutType,
	Hero as HeroType,
	Maloum as MaloumType,
	Service,
} from '@/types/sanity.types';
import {
	getAbout,
	getCaseStudies,
	getHero,
	getMaloum,
	getServices,
} from '@/utils/sanity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async (context) => {
	const hero = await getHero();
	const about = await getAbout();
	const services = await getServices();
	const maloum = await getMaloum();

	return { props: { hero, about, services, maloum } };
}) satisfies GetStaticProps<{
	hero: HeroType;
	about: AboutType;
	services: Service[];
	maloum: MaloumType;
}>;

export default function Home({
	hero,
	about,
	services,
	maloum,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="page-content">
			<Hero {...hero} services={services} />
			<Maloum {...maloum} />
			<Services items={services} />
			<About {...about} />
			<Contact />
		</div>
	);
}
