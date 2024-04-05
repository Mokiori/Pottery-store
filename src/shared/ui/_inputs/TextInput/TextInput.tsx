import cn from 'classnames';
import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './TextInput.module.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	value?: string | number | undefined;
	label?: string;
	type?: 'text' | 'number';
	maxLength?: number;
	errorBorder?: boolean;
	errorMessage?: string | null;
	characterLimit?: number;

	disabled?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(props => {
	const {
		value,
		type = 'text',
		maxLength,
		errorMessage,
		characterLimit,

		disabled = false,
		onChange,
		...restInputProps
	} = props;

	// * Styles
	// - Classes
	const containers = cn(s.container);

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			if (characterLimit) {
				const value = event.currentTarget.value;
				const sumOfCharacters = value.length;
				sumOfCharacters <= characterLimit && onChange(event);
			} else {
				onChange(event);
			}
		}
	};

	// * Render
	return (
		<div className={containers}>
			<input
				{...restInputProps}
				className={cn(s.input)}
				type={type}
				value={value === null || value === undefined ? '' : value}
				disabled={disabled}
				onChange={onChangeHandler}
				maxLength={maxLength}
			/>

			<span className={s.error}>{errorMessage}</span>
		</div>
	);
});
