import { FC, useState } from 'react';
import { Button } from '../_buttons/Button/Button';
import s from './CartItem.module.scss';
import { TextButton } from '../_buttons/TextButton/TextButton';

interface Props {
	id: string;
	name: string;
	image: string;
	price: number;
	count: number;
	onChangeSubtotal: (value: number, add: boolean) => void;
}

export const CartItem: FC<Props> = props => {
	const { name, image, price, count, onChangeSubtotal } = props;

	const [counter, setCounter] = useState(count);

	const onClickCounter = (isAddOperation: boolean) => {
		if (isAddOperation) {
			setCounter(counter + 1);
		} else {
			setCounter(counter - 1);
		}

		onChangeSubtotal(price, isAddOperation);
	};

	return (
		<div className={s.container}>
			<div className={s.item_image}>
				<img
					src={image}
					alt="handmade-item"
				/>
			</div>

			<div className={s.wrapper}>
				<div className={s.item_info}>
					<span>{name}</span>
					<span>{price}$</span>
				</div>

				<Button
					RightIcon={<div>+</div>}
					LeftIcon={<div>-</div>}
					onRightIconClick={() => counter < 99 && onClickCounter(true)}
					onLeftIconClick={() => counter > 1 && onClickCounter(false)}
					variant="counter"
				>
					{counter > 9 ? counter : `0${counter}`}
				</Button>
			</div>

			<div className={s.item_remove}>
				<TextButton>Remote</TextButton>
			</div>
		</div>
	);
};
