import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import { User } from '@nextui-org/user';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PortableText } from '@portabletext/react';
import { imageToUrl } from '@/utils/sanity';
import { CaseStudy, Service, Hero as HeroType } from '@/types/sanity.types';

export default function Hero({
	headlines,
	description,
	persons,
	services,
	case_studies,
}: {
	headlines: string[];
	description: HeroType['description'];
	persons: any[];
	services: Service[];
	case_studies: (CaseStudy & { service: { title: string } })[];
}) {
	return (
		<div className="hero container mx-auto min-h-96 flex justify-center flex-col gap-y-28 py-20">
			<div className="flex flex-col gap-y-10">
				<small className="text-4xl text-primary">red influence</small>

				<Swiper
					direction={'vertical'}
					autoHeight
					loop={true}
					modules={[Autoplay]}
					className="text-8xl max-w-6xl !m-0"
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

				<div className=" flex gap-10 flex-wrap">
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
			</div>

			<div className="max-w-4xl text-xl leading-loose flex flex-col gap-5">
				<PortableText value={description as any} />
			</div>

			<div className=" w-auto flex flex-col items-start gap-10">
				<div className="flex gap-10 flex-wrap">
					{case_studies.map((caseStudy, index) => (
						<Card
							key={index}
							className="py-4 bg-background/60 dark:bg-default-100/50"
							shadow="none"
							isBlurred
						>
							<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
								<small className="text-default-500">
									{caseStudy.service.title}
								</small>
								<h4 className="font-bold text-large">{caseStudy.title}</h4>
							</CardHeader>
							<CardBody className="overflow-visible py-2">
								<Image
									alt="Card background"
									className="object-cover rounded-xl"
									src={
										caseStudy.thumbnail
											? imageToUrl(caseStudy.thumbnail)
											: '/placeholder.webp'
									}
									width={270}
								/>
							</CardBody>
						</Card>
					))}
				</div>

				<Button as={Link} href="/case-studies">
					Alle Case Studies ansehen
				</Button>
			</div>
		</div>
	);
}
