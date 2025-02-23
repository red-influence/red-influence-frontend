import Social from '@/types/Social';
import { Menu } from '@/types/sanity.types';
import Link from 'next/link';
import Socials from './Socials';

export default function Footer({
	copyright,
	menu,
	socials,
}: {
	copyright: string;
	menu: Menu;
	socials: Social[] | undefined;
}) {
	return (
		<div className="banner w-full bg-background">
			<div className="container mx-auto flex items-center md:justify-between gap-4 min-h-32 p-5 md:px-0 flex-col md:flex-row justify-center">
				<span>
					© {new Date().getFullYear()} {copyright}
				</span>

				{socials && <Socials items={socials} />}

				<div className="flex gap-4">
					{menu.items.map((item, index) => (
						<Link href={item.url} target="_blank" key={index}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
