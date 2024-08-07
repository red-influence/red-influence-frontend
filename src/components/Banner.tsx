import Link from 'next/link';

export default function Banner({ emailAddress }: { emailAddress: string }) {
	return (
		<div className="banner w-full h-10 flex justify-center items-center gap-4 bg-primary px-5">
			<Link href={`mailto:${emailAddress}`} className="text-background">
				{emailAddress}
			</Link>
		</div>
	);
}
