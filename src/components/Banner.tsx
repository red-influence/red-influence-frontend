import Link from 'next/link';

export default function Banner() {
	return (
		<div className="banner w-full h-10 flex justify-center items-center gap-4 bg-primary px-5">
			<Link href="mailto:mail@red-influence.com">mail@red-influence.com</Link>
		</div>
	);
}
