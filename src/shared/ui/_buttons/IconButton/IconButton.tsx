import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import s from './IconButton.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	Icon: ReactNode;
}

export const IconButton: FC<Props> = props => {
	const { Icon, onClick, ...buttonProps } = props;

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			className={s.container}
			{...buttonProps}
			type="button"
			onClick={onClickHandler}
		>
			{Icon}
		</button>
	);
};
