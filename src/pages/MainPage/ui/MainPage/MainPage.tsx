import { Bestsellers } from '../Bestsellers/Bestsellers';
import { DesertCollection } from '../DesertCollection/DesertCollection';
import { Footer } from 'src/shared/ui/Footer/Footer';
import { NewArrivals } from '../NewArrivals/NewArrivals';
import { Newsletter } from '../Newsletter/Newsletter';
import { StartBlock } from '../StartBlock/StartBlock';
import s from './MainPage.module.scss';
import { Header } from 'src/shared/ui/Header/Header';

export const MainPage = () => {
	return (
		<div className={s.MainPage_container}>
			<Header isHomePage />

			<div className={s.MainPage_wrapper}>
				<StartBlock />
				<Bestsellers />
				<DesertCollection />
				<NewArrivals />
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};
