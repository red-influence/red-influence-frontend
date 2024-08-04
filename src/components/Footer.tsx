import { Menu } from '@/types/sanity.types';
import Link from 'next/link';

export default function Footer({
	copyright,
	menu,
}: {
	copyright: string;
	menu: Menu;
}) {
	return (
		<div className="banner w-full bg-background">
			<div className="container mx-auto flex items-center md:justify-between gap-4 min-h-32 p-5 md:px-0 flex-col md:flex-row">
				<span>
					© {new Date().getFullYear()} {copyright}
				</span>

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
