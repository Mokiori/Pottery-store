import s from './Catalog.module.scss';
import jug1 from 'src/shared/assets/img/330-400/jug-1.jpg';
import jug2 from 'src/shared/assets/img/330-400/jug-2.jpg';
import jug3 from 'src/shared/assets/img/330-400/jug-3.jpg';
import jugLarge from 'src/shared/assets/img/large/jug-large-1.jpg';
import jugTwo3 from 'src/shared/assets/img/510-350/jug-3.jpg';
import jugTwo4 from 'src/shared/assets/img/510-350/jug-4.jpg';
import jug4 from 'src/shared/assets/img/330-400/jug-4.jpg';
import jug5 from 'src/shared/assets/img/330-400/jug-5.jpg';
import plate1 from 'src/shared/assets/img/330-400/plate-1.jpg';
import largeItem from 'src/shared/assets/img/large/large-item.jpg';
import { Card } from 'src/shared/ui/Card/Card';

const catalog = [
	{
		id: 'row-1',
		count: 3,
		items: [
			{
				id: 'jug-1-330-400',
				image: jug1,
				name: 'Handmade jug',
				price: 35,
			},
			{
				id: 'jug-2-330-400',
				image: jug2,
				name: 'Handmade jug',
				price: 35,
			},
			{
				id: 'jug-3-330-400',
				image: jug3,
				name: 'Handmade jug',
				price: 35,
			},
		],
	},
	{
		id: 'row-2',
		count: 1,
		items: [
			{
				id: 'jug-large',
				image: jugLarge,
				name: 'Handmade jug',
				price: 35,
			},
		],
	},
	{
		id: 'row-3',
		count: 2,
		items: [
			{
				id: 'jug-3-510-350',
				image: jugTwo3,
				name: 'Handmade jug',
				price: 35,
			},
			{
				id: 'jug-4-510-350',
				image: jugTwo4,
				name: 'Handmade jug',
				price: 35,
			},
		],
	},
	{
		id: 'row-4',
		count: 3,
		items: [
			{
				id: 'jug-4-330-400',
				image: jug4,
				name: 'Handmade jug',
				price: 35,
			},
			{
				id: 'jug-5-330-400',
				image: jug5,
				name: 'Handmade jug',
				price: 35,
			},
			{
				id: 'plate-1-330-400',
				image: plate1,
				name: 'Handmade plate',
				price: 35,
			},
		],
	},
];

export const Catalog = () => {
	return (
		<>
			<div className={s.container}>
				{catalog.map(value => (
					<div
						key={value.id}
						className={s[`catalog_${value.count}`]}
					>
						{value.items.map(item => (
							<Card
								key={item.id}
								{...item}
								fixedHeight={value.count === 1}
							/>
						))}
					</div>
				))}
			</div>
			<Card
				id="catalog-item"
				image={largeItem}
				name="Handmade jug"
				price={35}
			/>
		</>
	);
};
