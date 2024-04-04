import React from 'react';
import s from './StartBlock.module.scss';
import mainImage from 'src/shared/assets/img/main-page.jpg';
import smallImage from 'src/shared/assets/img/main-page-small.jpg';
import { Button } from 'src/shared/ui/_buttons/Button/Button';

export const StartBlock = () => {
	return (
		<>
			<img
				className={s.main_image}
				src={mainImage}
				alt="main-image"
			/>

			<div className={s.container}>
				<div className={s.about}>
					<img
						className={s.pottery_image}
						src={smallImage}
						alt="pottery-image"
					/>

					<div className={s.description}>
						<h1>Pottery online store</h1>
						<p>Our online pottery store offers a vast selection of handmade ceramics in various styles, colors, and finishes.</p>
						<Button size="large">Shop now</Button>
					</div>
				</div>
			</div>
		</>
	);
};
