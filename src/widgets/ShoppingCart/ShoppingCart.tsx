import { CartItem } from 'src/shared/ui/CartItem/CartItem';
import s from './ShoppingCart.module.scss';
import { Button } from 'src/shared/ui/_buttons/Button/Button';
import { FC, useState } from 'react';
import cn from 'classnames';
import vase1 from 'src/shared/assets/img/large/vase-1.jpg';
import jug2 from 'src/shared/assets/img/510-350/jug-2.jpg';
import { useNavigate } from 'react-router-dom';

interface Props {
	onClose?: () => void;
}

const cartItems = [
	{
		id: 'vase',
		name: 'Handmade Vase',
		image: vase1,
		price: 75,
		count: 1,
	},
	{
		id: 'jug',
		name: 'Handmade Jug',
		image: jug2,
		price: 35,
		count: 1,
	},
];

export const ShoppingCart: FC<Props> = props => {
	const { onClose } = props;

	const navigate = useNavigate();

	const total = cartItems.map(item => item.price).reduce((acc, num) => acc + num, 0);

	const [subtotal, setSubtotal] = useState(total);
	const onChangeSubtotal = (value: number, add: boolean) => {
		setSubtotal(add ? subtotal + value : subtotal - value);
	};

	return (
		<div className={s.container}>
			<h3 className={s.title}>Shopping Cart</h3>

			{cartItems.map(item => (
				<>
					<CartItem
						key={item.id}
						{...item}
						onChangeSubtotal={onChangeSubtotal}
					/>

					<hr className={cn(s.divider, s.item_divider)} />
				</>
			))}

			<div className={s.cart_subtotal}>
				<span>Subtotal</span>
				<span>{subtotal}$</span>
			</div>

			<hr className={cn(s.divider, s.cart_divider)} />

			<div className={s.cart_additional}>
				<span>Shipping</span>
				<span>Calculated in checkout</span>
			</div>

			<div className={s.buttons}>
				<Button
					size="fullwidth"
					onClick={() => {
						onClose && onClose();
						navigate('/payment');
					}}
				>
					Checkout
				</Button>
				<Button
					variant="outlined"
					size="fullwidth"
					onClick={onClose}
				>
					Keep shopping
				</Button>
			</div>
		</div>
	);
};
