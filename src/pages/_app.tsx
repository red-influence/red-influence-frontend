import PageLayout from '@/components/PageLayout';
import { NextPage } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { Rubik } from 'next/font/google';
import { Providers } from '@/components/Providers';

const rubik = Rubik({ subsets: ['latin'] });

import '@/css/main.css';
import 'swiper/css';

import { getMenus, getSiteSettings } from '@/utils/sanity';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

type AppOwnProps = { siteSettings: any; menus: any };

export default function MyApp({
	Component,
	pageProps,
	siteSettings,
	menus,
}: AppPropsWithLayout & AppOwnProps) {
	return (
		<main className={rubik.className}>
			<Providers>
				<PageLayout siteSettings={siteSettings} menus={menus}>
					<Component {...pageProps} />
				</PageLayout>
			</Providers>
		</main>
	);
}

MyApp.getInitialProps = async (
	context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
	const ctx = await App.getInitialProps(context);
	const siteSettings = await getSiteSettings();
	const menus = await getMenus();

	return {
		...ctx,
		siteSettings: siteSettings,
		menus: menus,
	};
};
