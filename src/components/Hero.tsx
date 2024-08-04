import { Chip } from '@nextui-org/chip';
import { User } from '@nextui-org/user';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PortableText } from '@portabletext/react';
import { imageToUrl } from '@/utils/sanity';
import { CaseStudy, Service, Hero as HeroType } from '@/types/sanity.types';
import CaseStudiesGrid from './CaseStudiesGrid';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Hero({
	headlines,
	description,
	persons,
	services,
	case_studies,
}: {
	headlines: string[];
	description: HeroType['description'];
	persons: HeroType['persons'];
	services: Service[];
	case_studies: (CaseStudy & { service: { title: string } })[];
}) {
	return (
		<div className="hero container mx-auto min-h-96 flex justify-center flex-col gap-y-16 md:gap-y-28 py-12 md:py-20 px-5 md:px-0">
			<div className="flex flex-col gap-y-5 md:gap-y-10 max-w-6xl">
				<small className="text-3xl md:text-4xl text-primary">
					red influence
				</small>

				<Swiper
					direction={'vertical'}
					autoHeight
					loop={true}
					modules={[Autoplay]}
					className="text-2xl md:text-8xl !m-0"
					spaceBetween={50}
					autoplay={{
						delay: 8000,
						pauseOnMouseEnter: true,
					}}
					allowTouchMove={false}
				>
					{headlines.map((headline, index) => (
						<SwiperSlide key={index}>
							<h2>{headline}</h2>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="flex gap-4 flex-wrap">
					{services.map((service, index) => (
						<Chip radius="md" size="md" key={index}>
							{service.title}
						</Chip>
					))}
				</div>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className=" flex gap-y-5 gap-x-10 flex-wrap pt-5 md:pt-0">
						{persons.map((person, index) => (
							<User
								key={index}
								name={person.name}
								description={
									<Link
										href={`https://instagram.com/${person.instagram}`}
										target="_blank"
									>
										@{person.instagram}
									</Link>
								}
								avatarProps={{
									src: imageToUrl(person.image),
								}}
							/>
						))}
					</div>
				</ScrollAnimation>
			</div>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<div className="max-w-4xl text-md md:text-xl !leading-loose flex flex-col gap-y-7">
					<PortableText value={description as any} />
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce>
				<CaseStudiesGrid items={case_studies} showAllButton />
			</ScrollAnimation>
		</div>
	);
}
