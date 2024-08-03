import { Button } from '@nextui-org/button';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';

export default function Navigation({
	title,
	menu,
}: {
	title: string;
	menu: any;
}) {
	return (
		<Navbar isBordered className="h-16">
			<NavbarBrand>
				<Link color="foreground" href="/">
					<p className="font-medium text-inherit text-primary">{title}</p>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				{menu.items.map((item: any, index: number) => (
					<NavbarItem key={index}>
						<Link color="foreground" href={item.url}>
							{item.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} href="/#contact" variant="flat">
						Erstgespräch anfragen
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
