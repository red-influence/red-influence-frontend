import { Menu, Service } from '@/types/sanity.types';
import { Button } from '@nextui-org/button';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({
	title,
	menu,
	services,
}: {
	title: string;
	menu: Menu;
	services: Service[];
}) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Navbar
			isBordered
			className="h-16"
			onMouseLeave={() => {
				setIsOpen(false);
			}}
		>
			<NavbarBrand>
				<Link color="foreground" href="/">
					<p className="font-medium text-inherit text-primary">{title}</p>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				{menu.items.map((item, index) => {
					if (item.url === '/#services') {
						return (
							<NavbarItem
								key={index}
								onMouseEnter={() => {
									setIsOpen(true);
								}}
							>
								<Dropdown isOpen={isOpen} closeOnSelect>
									<DropdownTrigger>
										<Link color="foreground" href={item.url}>
											{item.title}
										</Link>
									</DropdownTrigger>

									<DropdownMenu
										aria-label="Leistungen"
										className="w-[340px]"
										itemClasses={{
											base: 'gap-4',
										}}
									>
										{services.map((service, index) => (
											<DropdownItem key={index}>
												<Link
													color="foreground"
													href={`/services/${service.slug.current}`}
													onClick={() => {
														setIsOpen(false);
													}}
													className="block w-full h-full"
												>
													{service.title}
												</Link>
											</DropdownItem>
										))}
									</DropdownMenu>
								</Dropdown>
							</NavbarItem>
						);
					}

					return (
						<NavbarItem key={index}>
							<Link color="foreground" href={item.url}>
								{item.title}
							</Link>
						</NavbarItem>
					);
				})}
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
