import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

export type ButtonVariant = 'filled' | 'outlined' | 'secondary' | 'counter';
export type ButtonSize = 'small' | 'medium' | 'large' | 'fullwidth';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	RightIcon?: ReactNode;
	LeftIcon?: ReactNode;
	onRightIconClick?: () => void;
	onLeftIconClick?: () => void;
};

export const Button: React.FC<Props> = props => {
	const {
		variant = 'filled', //
		size = 'fullwidth',
		LeftIcon,
		RightIcon,

		onClick,
		onRightIconClick,
		onLeftIconClick,

		children,
	} = props;

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<div className={cn(s.container, s[`container_${size}`])}>
			<button
				className={cn(s.btn, s[`btn_${variant}`], !RightIcon && !LeftIcon && s.btn_center)}
				type="button"
				onClick={onClickHandler}
			>
				{LeftIcon && (
					<div
						className={s.left_icon}
						onClick={onLeftIconClick}
					>
						{LeftIcon}
					</div>
				)}

				{children}

				{RightIcon && (
					<div
						className={s.right_icon}
						onClick={onRightIconClick}
					>
						{RightIcon}
					</div>
				)}
			</button>
		</div>
	);
};
