import { FC } from 'react';
import s from './Card.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

interface Props {
	id: string;
	image: string;
	name: string;
	price: number;
	fixedHeight?: boolean;
}

export const Card: FC<Props> = props => {
	const { image, id, name, price, fixedHeight } = props;

	const navigate = useNavigate();

	return (
		<div className={s.Card_container}>
			<img
				className={cn(s.Card_image, fixedHeight && s.Card_image_fixed)}
				src={image}
				alt={id}
				onClick={() => navigate(`/details/${id}`)}
			/>

			<span onClick={() => navigate(`/details/${id}`)}>{name}</span>
			<span>{price} $</span>
		</div>
	);
};
