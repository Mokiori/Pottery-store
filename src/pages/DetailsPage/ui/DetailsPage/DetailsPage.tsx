import { Header } from 'src/shared/ui/Header/Header';
import s from './DetailsPage.module.scss';
import { Slider } from '../Slider/Slider';
import { Description } from '../Description/Description';

export const DetailsPage = () => {
	return (
		<div className={s.DetailsPage_container}>
			<Header whiteLogo />

			<div className={s.DetailsPage_wrapper}>
				<Slider />
				<Description />
			</div>
		</div>
	);
};
