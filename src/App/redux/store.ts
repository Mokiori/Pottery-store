import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favorite/slice';
import { favoriteSlice } from './slices/favorite/slice';

export default configureStore({
	reducer: {
		favorite: favoriteReducer,
	},
});

export const store = configureStore({
	reducer: {
		favorite: favoriteSlice.reducer,
	},
	devTools: {
		trace: true,
	},
});

export type RootState = ReturnType<typeof store.getState>;
