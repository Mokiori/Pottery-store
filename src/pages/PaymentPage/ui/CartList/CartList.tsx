import { ShoppingCart } from 'src/widgets/ShoppingCart/ShoppingCart';
import s from './CartList.module.scss';

export const CartList = () => {
	return (
		<div className={s.container}>
			<ShoppingCart />
		</div>
	);
};
