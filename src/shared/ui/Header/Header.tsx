import React, { FC } from 'react';
import s from './Header.module.scss';
import { ReactComponent as ShoppingCartSVG } from 'src/shared/assets/svg/navigation/shopping-cart.svg';
import { ReactComponent as UserSVG } from 'src/shared/assets/svg/navigation/user.svg';
import { ReactComponent as FavoriteSVG } from 'src/shared/assets/svg/navigation/favorite.svg';
import { IconButton } from '../_buttons/IconButton/IconButton';
import cn from 'classnames';

interface Props {
	isHomePage?: boolean;
	whiteLogo?: boolean;
}

export const Header: FC<Props> = props => {
	const { isHomePage, whiteLogo } = props;

	return (
		<div className={s.container}>
			<div className={cn(s.wrapper, isHomePage && s.home_wrapper)}>
				<a
					className={cn(s.logo, whiteLogo && s.logo_white)}
					href="/"
				>
					Pottery
				</a>

				<div className={s.navigation}>
					<a href="/catalog">Catalog</a>
					<a href="#">About us</a>
					<a href="#">Contacts</a>
				</div>
			</div>

			<div className={s.actions}>
				<IconButton Icon={<ShoppingCartSVG />} />
				<IconButton Icon={<FavoriteSVG />} />
				<IconButton Icon={<UserSVG />} />
			</div>
		</div>
	);
};
