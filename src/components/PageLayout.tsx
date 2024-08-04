import { useMemo } from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Footer from './Footer';
import { Menu, Service, SiteSettings } from '@/types/sanity.types';

export default function RootLayout({
	children,
	siteSettings,
	menus,
	services,
}: Readonly<{
	children: React.ReactNode;
	siteSettings: SiteSettings;
	menus: Menu[];
	services: Service[];
}>) {
	const mainMenu = useMemo(
		() => menus.find((menu) => menu.slug.current === 'main-menu'),
		[menus]
	);

	const footerMenu = useMemo(
		() => menus.find((menu) => menu.slug.current === 'footer-menu'),
		[menus]
	);

	return (
		<div id="content">
			<div className="header fixed top-0 w-full z-50">
				<Banner />
				<Navigation
					title={siteSettings.title}
					menu={mainMenu as Menu}
					services={services}
				/>
			</div>

			{children}

			<Footer copyright={siteSettings.title} menu={footerMenu as Menu} />
		</div>
	);
}
