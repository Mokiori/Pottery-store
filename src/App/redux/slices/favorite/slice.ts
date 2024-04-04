import { createSlice } from '@reduxjs/toolkit';
import { Product } from './types';

interface State {
	products: Product[];
}

const initialState: State = {
	products: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products = [...state.products, action.payload];
		},
		removeProduct: (state, action) => {
			state.products = [...state.products.filter(product => product.id !== action.payload)];
		},
	},
});

export const actionsFavorite = favoriteSlice.actions;
export default favoriteSlice.reducer;
