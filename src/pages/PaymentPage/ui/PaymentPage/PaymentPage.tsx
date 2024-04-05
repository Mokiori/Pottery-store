import { Header } from 'src/shared/ui/Header/Header';
import s from './PaymentPage.module.scss';
import { ContactsInformation } from '../ContactsInformation/ContactInformation';
import { CartList } from '../CartList/CartList';
import { Footer } from 'src/shared/ui/Footer/Footer';

export const PaymentPage = () => {
	return (
		<div className={s.PaymentPage_container}>
			<Header />

			<div className={s.PaymentPage_wrapper}>
				<ContactsInformation />

				<CartList />
			</div>

			<Footer />
		</div>
	);
};
