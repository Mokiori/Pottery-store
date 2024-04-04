import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ReactComponent as ArrowRight } from 'src/shared/assets/svg/action/arrow-right.svg';
import s from './TextButton.module.scss';

export type ButtonVariant = 'primary' | 'secondary';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?: ButtonVariant;
	icon?: boolean;
};

export const TextButton: React.FC<Props> = props => {
	const { variant = 'primary', icon, onClick, children } = props;

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<div className={(s.container, s[`container_${variant}`])}>
			<button
				type="button"
				onClick={onClickHandler}
			>
				{children}
			</button>
			{icon && <ArrowRight />}
		</div>
	);
};
