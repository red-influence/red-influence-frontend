import Social from '@/types/Social';
import { Image } from '@nextui-org/image';
import Link from 'next/link';

export default function Socials({ items }: { items: Social[] }) {
	return (
		<div className="flex gap-y-2 gap-x-5 flex-wrap">
			{items.map((social, index) => (
				<div className="flex gap-1 hover:underline items-center" key={index}>
					<Image
						alt={social.type}
						src={`/${social.type.toLowerCase()}.svg`}
						width={25}
						height={25}
						loading="lazy"
					/>

					<Link href={social.url} target="_blank">
						{social.type}
					</Link>
				</div>
			))}
		</div>
	);
}
