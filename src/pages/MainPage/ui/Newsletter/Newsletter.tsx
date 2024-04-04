import { useState } from 'react';
import s from './Newsletter.module.scss';
import { Button } from 'src/shared/ui/_buttons/Button/Button';

export const Newsletter = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<h2 className={s.title}>Newsletter</h2>

				<p>Be sure to sign up for our newsletter to stay updated on new releases and special promotions.</p>

				<div className={s.form}>
					<input
						value={name}
						type="text"
						placeholder="Name"
						onChange={e => setName(e.target.value)}
					/>
					<input
						value={email}
						type="text"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<Button size="large">Subscribe</Button>
			</div>
		</div>
	);
};
