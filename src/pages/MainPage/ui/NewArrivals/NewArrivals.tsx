import s from './NewArrivals.module.scss';
import jug1 from 'src/shared/assets/img/510-350/jug-1.jpg';
import jug2 from 'src/shared/assets/img/510-350/jug-2.jpg';
import { Card } from 'src/shared/ui/Card/Card';
import { TextButton } from 'src/shared/ui/_buttons/TextButton/TextButton';

const catalog = [
	{
		id: 'jug-1',
		image: jug1,
		name: 'Handmade jug',
		price: 35,
	},
	{
		id: 'jug-2',
		image: jug2,
		name: 'Handmade jug',
		price: 35,
	},
];

export const NewArrivals = () => {
	return (
		<div className={s.container}>
			<h2 className={s.title}>New arrivals</h2>

			<div className={s.catalog}>
				{catalog.map(item => (
					<Card
						key={item.id}
						{...item}
					/>
				))}
			</div>

			<TextButton icon>Shop now</TextButton>
		</div>
	);
};
