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
		<div className="banner w-full h-32 bg-background">
			<div className="container mx-auto flex items-center justify-between gap-4 h-full">
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
