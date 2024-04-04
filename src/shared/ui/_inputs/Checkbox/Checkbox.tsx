import { FC, InputHTMLAttributes } from 'react';
import s from './Checkbox.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
	label?: string;
}

export const Checkbox: FC<Props> = props => {
	const { label, checked, ...rest } = props;

	return (
		<label className={s.container}>
			<input
				readOnly={true}
				checked={checked}
				type="checkbox"
				{...rest}
			/>

			<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="14"
					height="14"
					fill="white"
				/>
				{checked && (
					<path
						className={s.check_mark}
						d="M3 7.46154L5.37838 10L11 4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				)}
			</svg>

			{label && <span>{label}</span>}
		</label>
	);
};
