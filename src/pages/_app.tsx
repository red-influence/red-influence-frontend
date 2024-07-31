import Layout from '@/components/layout';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import '@/scss/main.scss';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<main className={inter.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
