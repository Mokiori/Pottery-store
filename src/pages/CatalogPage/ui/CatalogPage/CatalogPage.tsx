import { Header } from 'src/shared/ui/Header/Header';
import s from './CatalogPage.module.scss';
import { Filters } from '../Filters/Filters';
import { Catalog } from '../Catalog/Catalog';
import { Footer } from 'src/shared/ui/Footer/Footer';

export const CatalogPage = () => {
	return (
		<div className={s.CatalogPage_container}>
			<Header />

			<div className={s.CatalogPage_wrapper}>
				<Filters />
			</div>

			<Catalog />

			<Footer />
		</div>
	);
};
