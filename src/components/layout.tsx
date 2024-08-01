import Navigation from './Navigation';

export default function RootLayout({
	children,
	siteSettings,
}: Readonly<{
	children: React.ReactNode;
	siteSettings: any;
}>) {
	return (
		<div id="content">
			<Navigation title={siteSettings.title} />

			{children}
		</div>
	);
}
