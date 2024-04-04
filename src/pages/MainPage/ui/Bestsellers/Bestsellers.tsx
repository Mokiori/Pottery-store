import flowerVase from 'src/shared/assets/img/330-350/flower-vase.jpg';
import jug1 from 'src/shared/assets/img/330-350/jug-1.jpg';
import jug2 from 'src/shared/assets/img/330-350/jug-2.jpg';
import { TextButton } from 'src/shared/ui/_buttons/TextButton/TextButton';
import s from './Bestsellers.module.scss';
import { Card } from 'src/shared/ui/Card/Card';

const catalog = [
	{
		id: 'flower-vase',
		image: flowerVase,
		name: 'Flower vase',
		price: 35,
	},
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

export const Bestsellers = () => {
	return (
		<div className={s.container}>
			<h2 className={s.title}>Bestsellers</h2>

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
