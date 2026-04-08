import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState, IProduct } from '../types/api.type';

const initialState: ICartState = {
	items: [],
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IProduct>) => {
			const existingItem = state.items.find(item => item.id === action.payload.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}

			state.totalAmount = state.items.reduce(
				(sum, item) => sum + item.priceNumeric * item.quantity,
				0
			);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload);

			state.totalAmount = state.items.reduce(
				(sum, item) => sum + item.priceNumeric * item.quantity,
				0
			);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalAmount = 0;
		}
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;