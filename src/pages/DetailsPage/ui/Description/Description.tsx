import cn from 'classnames';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAIN_CATALOG } from 'src/app/redux/catalog';
import { ReactComponent as FavoriteSVG } from 'src/shared/assets/svg/navigation/favorite.svg';
import { Button } from 'src/shared/ui/_buttons/Button/Button';
import { IconButton } from 'src/shared/ui/_buttons/IconButton/IconButton';
import s from './Description.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsFavorite } from 'src/app/redux/slices/favorite/slice';
import { RootState } from 'src/app/redux/store';

export const Description = () => {
	const [tabId, setTabId] = useState(0);

	const { id: itemId } = useParams();

	// - Redux
	const dispatch = useDispatch();
	const { addProduct, removeProduct } = actionsFavorite;

	const { products } = useSelector((state: RootState) => state.favorite);

	// - Входит ли товар в понравившееся
	const isFavorite = !!products.find(item => item.id === itemId);

	// - Поиск информации о товаре
	const itemInfo = MAIN_CATALOG.find(item => item.id === itemId);

	const {
		name = 'Товар не добавлен в каталог', //
		price = 75,
	} = itemInfo || {};

	// - Понравившееся
	const onChangeFavorite = (isFavorite: boolean) => {
		if (isFavorite) {
			dispatch(removeProduct(itemId));
		} else {
			dispatch(addProduct(itemInfo));
		}
	};

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h3>{name}</h3>

				<span>{price}$</span>
			</div>

			<div className={s.actions}>
				<Button size="fullwidth">Add to card</Button>

				<IconButton
					filled={isFavorite}
					Icon={<FavoriteSVG />}
					onClick={() => onChangeFavorite(isFavorite)}
				/>
			</div>

			<div className={s.tabs}>
				<div
					className={cn(s.tab, tabId === 0 && s.tab_selected)}
					onClick={() => setTabId(0)}
				>
					Description
				</div>

				<div
					className={cn(s.tab, tabId === 1 && s.tab_selected)}
					onClick={() => setTabId(1)}
				>
					Shipping & Returns
				</div>
			</div>

			{tabId === 0 && (
				<p className={s.content}>
					This handmade vase is a stunning piece of ceramic work, featuring a glossy finish in shades of deep brown.{/* */}
					This vase is truly a one-of-a-kind piece that would make a striking addition to any home decor scheme.
				</p>
			)}

			{tabId === 1 && <p className={s.content}>...</p>}
		</div>
	);
};
