import { useMemo } from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import Footer from './Footer';

export default function RootLayout({
	children,
	siteSettings,
	menus,
}: Readonly<{
	children: React.ReactNode;
	siteSettings: any;
	menus: any;
}>) {
	const mainMenu = useMemo(
		() => menus.find((menu: any) => menu.slug.current === 'main-menu'),
		[menus]
	);

	const footerMenu = useMemo(
		() => menus.find((menu: any) => menu.slug.current === 'footer-menu'),
		[menus]
	);

	return (
		<div id="content">
			<div className="header fixed top-0 w-full z-50">
				<Banner />
				<Navigation title={siteSettings.title} menu={mainMenu} />
			</div>

			{children}

			<Footer copyright={siteSettings.title} menu={footerMenu} />
		</div>
	);
}
