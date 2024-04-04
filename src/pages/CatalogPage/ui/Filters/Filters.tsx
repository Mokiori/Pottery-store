import { Button } from 'src/shared/ui/_buttons/Button/Button';
import s from './Filters.module.scss';
import { ReactComponent as ArrowDownSVG } from 'src/shared/assets/svg/action/arrow-down.svg';
import { ReactComponent as FilterSVG } from 'src/shared/assets/svg/action/filter.svg';
import { useState } from 'react';
import { FilterPanel } from '../FilterPanel/FilterPanel';

export const Filters = () => {
	const [isOpenPanel, setIsOpenPanel] = useState(false);

	const onOpenPanel = () => {
		setIsOpenPanel(true);
		document.body.classList.add('modal_open');
	};

	const onClosePanel = () => {
		setIsOpenPanel(false);
		document.body.classList.remove('modal_open');
	};

	return (
		<div className={s.container}>
			{isOpenPanel && <FilterPanel onClose={onClosePanel} />}

			<div className={s.sort_wrapper}>
				<span>Sort by</span>

				<Button
					size="medium"
					variant="secondary"
					RightIcon={<ArrowDownSVG />}
				>
					Best selling
				</Button>
			</div>

			<Button
				size="small"
				variant="secondary"
				RightIcon={<FilterSVG />}
				onClick={onOpenPanel}
			>
				Filters
			</Button>
		</div>
	);
};
