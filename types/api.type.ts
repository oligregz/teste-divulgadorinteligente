import { ReactNode } from "react";

export interface IMeta {
	pagination?: {
		page?: number;
		pageSize?: number;
		pageCount?: number;
		total?: number;
	};
}

export interface IStrapiProductAttributes {
	title: string;
	image: string;
	price: string;
	price_from: string | null;
	link: string;
	seller: string;
	coupon: string | null;
}

export interface IStrapiCouponAttributes {
	code: string;
	discount: string;
	title: string;
	description: string;
	seller: string;
}

export interface IStrapiAttribute<T> {
	id: number;
	attributes: T;
}

export interface IStrapiResponse<T> {
	data: IStrapiAttribute<T>[];
	meta: IMeta;
}

export interface IProduct {
	id: number;
	title: string;
	image: string;
	priceFormatted: string;
	priceNumeric: number;
	priceFromFormatted: string | null;
	link: string;
	seller: string;
	coupon: string | null;
}

export interface ICoupon {
	id: number;
	code: string;
	discount: string;
	title: string;
	description: string;
	seller: string;
}

export interface ICartItem extends IProduct {
	quantity: number;
}

export interface ICartState {
	items: ICartItem[];
	totalAmount: number;
}

export interface IStoreProviderProps {
	children: ReactNode;
}

export interface IProductCardProps {
	product: IProduct;
}

export interface ICartDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}