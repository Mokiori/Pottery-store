import { Button } from 'src/shared/ui/_buttons/Button/Button';
import s from './Description.module.scss';
import { IconButton } from 'src/shared/ui/_buttons/IconButton/IconButton';
import { ReactComponent as FavoriteSVG } from 'src/shared/assets/svg/navigation/favorite.svg';
import { useState } from 'react';
import cn from 'classnames';

export const Description = () => {
	const [tabId, setTabId] = useState(0);

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h3>Handmade vase</h3>

				<span>75$</span>
			</div>

			<div className={s.actions}>
				<Button size="fullwidth">Add to card</Button>

				<IconButton Icon={<FavoriteSVG />} />
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
