import { useState } from 'react';
import s from './Slider.module.scss';
import vase1 from 'src/shared/assets/img/large/vase-1.jpg';
import vase2 from 'src/shared/assets/img/large/vase-2.jpg';
import vase3 from 'src/shared/assets/img/large/vase-3.jpg';
import cn from 'classnames';

const images = [vase1, vase2, vase3];

export const Slider = () => {
	const [slide, setSlide] = useState(0);

	return (
		<div className={s.container}>
			<img
				className={s.slider_image}
				src={images[slide]}
				alt="handmade"
			/>

			<div className={s.slider_nav}>
				{images.map((img, index) => (
					<span
						key={`img${index}`}
						className={cn(s.slider_dot, slide === index && s.slider_dot_selected)}
						onClick={() => setSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};
