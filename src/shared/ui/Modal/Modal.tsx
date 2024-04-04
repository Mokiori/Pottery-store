import { FC, ReactNode } from 'react';
import s from './Modal.module.scss';
import { ReactComponent as CloseSVG } from 'src/shared/assets/svg/action/close.svg';

interface Props {
	onClose: () => void;
	children?: ReactNode;
}

export const Modal: FC<Props> = props => {
	const { children, onClose } = props;

	return (
		<div className={s.container}>
			<div className={s.panel}>
				<div
					className={s.panel_close}
					onClick={onClose}
				>
					<CloseSVG />
				</div>

				{children}
			</div>
		</div>
	);
};
