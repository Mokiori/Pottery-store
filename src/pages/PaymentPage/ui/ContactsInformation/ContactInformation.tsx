import { TextInput } from 'src/shared/ui/_inputs/TextInput/TextInput';
import s from './ContactInformation.module.scss';
import { useState } from 'react';
import { Checkbox } from 'src/shared/ui/_inputs/Checkbox/Checkbox';
import { Button } from 'src/shared/ui/_buttons/Button/Button';

export const ContactsInformation = () => {
	const [value, setValue] = useState('');
	return (
		<div className={s.form}>
			<div className={s.form_wrapper}>
				<h3 className={s.form_title}>Contact information</h3>

				<TextInput
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
					placeholder="Email *"
				/>
			</div>

			<div className={s.form_wrapper}>
				<h3 className={s.form_title}>Billing details</h3>

				<div className={s.form_inputs_wrapper}>
					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="First name *"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Mobile phone *"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Country *"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Street adress *"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Apartment, suite, etc (optional)"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Town / City *"
					/>

					<TextInput
						value={value}
						onChange={e => setValue(e.currentTarget.value)}
						placeholder="Postcode / ZIP *"
					/>
				</div>
			</div>

			<div className={s.form_agreement}>
				<Checkbox
					variant="secondary"
					label="I have read and agree to the website terms and conditions *"
				/>

				<Checkbox
					variant="secondary"
					label="I want to recieve the newsletter"
				/>
			</div>

			<p className={s.form_info}>
				Your personal data will be used to process your order, support your experience throughout this website, {/* */}
				and for other purposes described in our <span>privacy policy</span>.
			</p>

			<Button>Confirm Order</Button>
		</div>
	);
};
