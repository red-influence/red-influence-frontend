import { HTMLAttributes, PropsWithChildren } from 'react';
import ScrollAnimationComponent from 'react-animate-on-scroll';

export default function ScrollAnimation(
	props: PropsWithChildren & HTMLAttributes<HTMLDivElement>
) {
	return (
		<ScrollAnimationComponent
			animateIn="fadeIn"
			animateOnce
			offset={50}
			{...props}
		/>
	);
}
