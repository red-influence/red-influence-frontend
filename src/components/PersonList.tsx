import { Person } from '@/types/sanity.types';
import PersonBox from './PersonBox';

export default function PersonList({ items }: { items: Person[] }) {
	return (
		<div className="flex gap-3 md:gap-6 flex-wrap">
			{items.map((person, index) =>
				person.description ? <PersonBox person={person} key={index} /> : null
			)}
		</div>
	);
}
