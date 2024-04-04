import { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as CloseSVG } from 'src/shared/assets/svg/action/close.svg';
import { Button } from 'src/shared/ui/_buttons/Button/Button';
import { Checkbox } from 'src/shared/ui/_inputs/Checkbox/Checkbox';
import { RadioColor } from 'src/shared/ui/_inputs/RadioColor/RadioColor';
import { CATEGORIES, COLORS, TYPES } from '../../const/filters';
import s from './FilterPanel.module.scss';

interface Props {
	onClose: () => void;
}

export const FilterPanel: FC<Props> = props => {
	const { onClose } = props;

	// - Colors
	const [colorOptions, setColorOptions] = useState<string[]>([]);
	const onChangeColors = (e: ChangeEvent<HTMLInputElement>, selected: string) => {
		const checked = e.target.checked;

		if (checked) {
			setColorOptions([...colorOptions, selected]);
		} else {
			setColorOptions(colorOptions.filter(c => c !== selected));
		}
	};

	// - Types
	const [typeOptions, setTypeOptions] = useState<string[]>([]);

	const onChangeTypes = (e: ChangeEvent<HTMLInputElement>, selected: string) => {
		const checked = e.target.checked;

		if (checked) {
			setTypeOptions([...typeOptions, selected]);
		} else {
			setTypeOptions(typeOptions.filter(type => type !== selected));
		}
	};

	// - Categories
	const [categoryOptions, setCategoryOptions] = useState<string[]>([]);

	const onChangeCategories = (e: ChangeEvent<HTMLInputElement>, selected: string) => {
		const checked = e.target.checked;

		if (checked) {
			setCategoryOptions([...categoryOptions, selected]);
		} else {
			setCategoryOptions(categoryOptions.filter(category => category !== selected));
		}
	};

	return (
		<div className={s.container}>
			<div className={s.panel}>
				<div
					className={s.panel_close}
					onClick={onClose}
				>
					<CloseSVG />
				</div>

				<div className={s.panel_content}>
					<h3 className={s.panel_title}>Filters</h3>

					<div className={s.panel_price}>
						<span className={s.panel_subtitle}>Price</span>
					</div>

					<div className={s.panel_color}>
						<span className={s.panel_subtitle}>Colors</span>

						<div className={s.panel_color_options}>
							{COLORS.map(color => (
								<RadioColor
									key={color}
									value={+color}
									checked={colorOptions.includes(color)}
									onChange={e => onChangeColors(e, color)}
								/>
							))}
						</div>
					</div>

					<div className={s.panel_type}>
						<span className={s.panel_subtitle}>Type of products</span>

						<div className={s.panel_two_col_options}>
							{TYPES.map(type => (
								<Checkbox
									key={type}
									label={type}
									checked={typeOptions.includes(type)}
									onChange={e => onChangeTypes(e, type)}
								/>
							))}
						</div>
					</div>

					<div className={s.panel_category}>
						<span className={s.panel_subtitle}>Category</span>

						<div className={s.panel_col_options}>
							{CATEGORIES.map(category => (
								<Checkbox
									key={category}
									label={category}
									checked={categoryOptions.includes(category)}
									onChange={e => onChangeCategories(e, category)}
								/>
							))}
						</div>
					</div>

					<Button
						size="fullwidth"
						onClick={onClose}
					>
						Apply
					</Button>
				</div>
			</div>
		</div>
	);
};
