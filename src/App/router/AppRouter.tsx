import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage } from 'src/pages/CatalogPage';
import { DetailsPage } from 'src/pages/DetailsPage';
import { MainPage } from 'src/pages/MainPage';
import { PaymentPage } from 'src/pages/PaymentPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<MainPage />}
				/>

				<Route
					path="/catalog"
					element={<CatalogPage />}
				/>

				<Route
					path="/details/:id"
					element={<DetailsPage />}
				/>

				<Route
					path="/payment"
					element={<PaymentPage />}
				/>

				<Route
					path="*"
					element={<div>Нет такой</div>}
				/>
			</Routes>
		</BrowserRouter>
	);
};
