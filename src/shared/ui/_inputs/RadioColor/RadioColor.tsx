import React, { InputHTMLAttributes } from 'react';
import s from './RadioColor.module.scss';
import cn from 'classnames';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
	label?: string;
	value: number;
}

export const RadioColor: React.FC<Props> = props => {
	const { className, value, checked, ...restProps } = props;

	// * Render
	return (
		<label className={cn(s.label, s[`label_${value}`], className)}>
			<input
				readOnly={true}
				checked={checked}
				type="checkbox"
				{...restProps}
			/>
			<span /> {/* checkbox */}
		</label>
	);
};
