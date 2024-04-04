import cn from 'classnames';
import { FC, useState } from 'react';
import { ReactComponent as FavoriteSVG } from 'src/shared/assets/svg/navigation/favorite.svg';
import { ReactComponent as ShoppingCartSVG } from 'src/shared/assets/svg/navigation/shopping-cart.svg';
import { ReactComponent as UserSVG } from 'src/shared/assets/svg/navigation/user.svg';
import { ShoppingCart } from 'src/widgets/ShoppingCart/ShoppingCart';
import { Modal } from '../Modal/Modal';
import { IconButton } from '../_buttons/IconButton/IconButton';
import s from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
	isHomePage?: boolean;
	whiteLogo?: boolean;
}

export const Header: FC<Props> = props => {
	const { isHomePage, whiteLogo } = props;

	const navigate = useNavigate();

	const [isVisibleCart, setIsVisibleCart] = useState(false);
	const toggleVisibilityCart = () => {
		if (isVisibleCart) {
			document.body.classList.remove('modal_open');
		} else {
			document.body.classList.add('modal_open');
		}

		setIsVisibleCart(prevState => !prevState);
	};

	return (
		<>
			{isVisibleCart && (
				<Modal onClose={toggleVisibilityCart}>
					<ShoppingCart onClose={toggleVisibilityCart} />
				</Modal>
			)}
			<div className={s.container}>
				<div className={cn(s.wrapper, isHomePage && s.home_wrapper)}>
					<div
						className={cn(s.logo, whiteLogo && s.logo_white)}
						onClick={() => navigate('/')}
					>
						Pottery
					</div>

					<div className={s.navigation}>
						<span onClick={() => navigate('/catalog')}>Catalog</span>
						<span>About us</span>
						<span>Contacts</span>
					</div>
				</div>

				<div className={s.actions}>
					<IconButton
						Icon={<ShoppingCartSVG />}
						onClick={toggleVisibilityCart}
					/>
					<IconButton Icon={<FavoriteSVG />} />
					<IconButton Icon={<UserSVG />} />
				</div>
			</div>
		</>
	);
};
