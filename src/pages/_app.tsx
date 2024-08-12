import PageLayout from '@/components/PageLayout';
import { NextPage } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { Rubik } from 'next/font/google';
import { Providers } from '@/components/Providers';

const rubik = Rubik({ subsets: ['latin'] });

import '@/css/main.css';
import 'swiper/css';
import '@/css/animate.compat.css';

import { getMenus, getServices, getSiteSettings } from '@/utils/sanity';
import { Menu, Service, SiteSettings } from '@/types/sanity.types';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

type AppOwnProps = {
	siteSettings: SiteSettings;
	menus: Menu[];
	services: Service[];
};

export default function MyApp({
	Component,
	pageProps,
	siteSettings,
	menus,
	services,
}: AppPropsWithLayout & AppOwnProps) {
	return (
		<>
			<Head>
				<title>{siteSettings.title}</title>
				<meta name="description" content={siteSettings.description} />
				<link rel="preconnect" href="https://cdn.sanity.io" />
				<link rel="dns-prefetch" href="https://cdn.sanity.io" />
				<meta property="og:title" content={siteSettings.title} />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${
						process.env.NEXT_PUBLIC_SITE_URL ?? 'https://red-influence.com'
					}/og-image.jpg`}
				/>
				<meta
					property="og:url"
					content={
						process.env.NEXT_PUBLIC_SITE_URL ?? 'https://red-influence.com'
					}
				/>
				<meta name="twitter:card" content="summary" />

				<meta property="og:description" content={siteSettings.description} />
				<meta property="og:site_name" content={siteSettings.title} />
				<meta name="twitter:image:alt" content={siteSettings.title} />
			</Head>

			<main className={rubik.className}>
				<Providers>
					<PageLayout
						siteSettings={siteSettings}
						menus={menus}
						services={services}
					>
						<Component {...pageProps} />
					</PageLayout>
				</Providers>
			</main>
		</>
	);
}

MyApp.getInitialProps = async (
	context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
	const ctx = await App.getInitialProps(context);
	const siteSettings = await getSiteSettings();
	const menus = await getMenus();
	const services = await getServices();

	return {
		...ctx,
		siteSettings: siteSettings,
		menus: menus,
		services: services,
	};
};
