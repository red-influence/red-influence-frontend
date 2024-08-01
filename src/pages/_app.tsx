import Layout from '@/components/Layout';
import { NextPage } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

import '@/css/main.css';
import { getSiteSettings } from '@/utils/sanity';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

type AppOwnProps = { siteSettings: any };

export default function MyApp({
	Component,
	pageProps,
	siteSettings,
}: AppPropsWithLayout & AppOwnProps) {
	return (
		<main className={inter.className}>
			<Providers>
				<Layout siteSettings={siteSettings}>
					<Component {...pageProps} />
				</Layout>
			</Providers>
		</main>
	);
}

MyApp.getInitialProps = async (
	context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
	const ctx = await App.getInitialProps(context);
	const siteSettings = await getSiteSettings();

	return {
		...ctx,
		siteSettings: siteSettings,
	};
};
