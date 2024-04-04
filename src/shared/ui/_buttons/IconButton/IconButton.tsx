import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import s from './IconButton.module.scss';
import cn from 'classnames';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	Icon: ReactNode;
	filled?: boolean;
}

export const IconButton: FC<Props> = props => {
	const { Icon, filled, onClick, ...buttonProps } = props;

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			className={cn(s.container, filled && s.filled)}
			{...buttonProps}
			type="button"
			onClick={onClickHandler}
		>
			{Icon}
		</button>
	);
};
