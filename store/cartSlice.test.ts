import cartReducer, { addItem, clearCart } from './cartSlice';
import { ICartState, IProduct } from '../types/api.type';

describe('[CartSlice Reducer - Tests]', () => {
	const initialState: ICartState = {
		items: [],
		totalAmount: 0,
	};

	const mockProduct: IProduct = {
		id: 1,
		title: 'Test Product',
		image: 'test.jpg',
		priceFormatted: 'R$ 10,00',
		priceNumeric: 10.0,
		priceFromFormatted: null,
		link: 'http://test.com',
		seller: 'test_seller',
		coupon: null,
	};

	it('[1] - should handle initial state', () => {
		expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});

	it('[2] - should handle adding a new item', () => {
		const actual = cartReducer(initialState, addItem(mockProduct));

		expect(actual.items.length).toEqual(1);
		expect(actual.items[0].quantity).toEqual(1);
		expect(actual.totalAmount).toEqual(10.0);
	});

	it('[3] - should handle incrementing quantity of an existing item', () => {
		const stateWithItem: ICartState = {
			items: [{ ...mockProduct, quantity: 1 }],
			totalAmount: 10.0,
		};

		const actual = cartReducer(stateWithItem, addItem(mockProduct));

		expect(actual.items.length).toEqual(1);
		expect(actual.items[0].quantity).toEqual(2);
		expect(actual.totalAmount).toEqual(20.0);
	});

	it('[4] - should handle clearing the cart', () => {
		const stateWithItem: ICartState = {
			items: [{ ...mockProduct, quantity: 2 }],
			totalAmount: 20.0,
		};

		const actual = cartReducer(stateWithItem, clearCart());

		expect(actual.items).toEqual([]);
		expect(actual.totalAmount).toEqual(0);
	});
});