import { ChangeEvent, FC, useState } from 'react';
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
		<div className={s.content}>
			<h3 className={s.content_title}>Filters</h3>

			<div className={s.content_price}>
				<span className={s.content_subtitle}>Price</span>
			</div>

			<div className={s.content_color}>
				<span className={s.content_subtitle}>Colors</span>

				<div className={s.content_color_options}>
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

			<div className={s.content_type}>
				<span className={s.content_subtitle}>Type of products</span>

				<div className={s.content_two_col_options}>
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

			<div className={s.content_category}>
				<span className={s.content_subtitle}>Category</span>

				<div className={s.content_col_options}>
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
	);
};
