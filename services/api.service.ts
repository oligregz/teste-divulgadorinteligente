import {
	IProduct,
	ICoupon,
	IStrapiResponse,
	IStrapiProductAttributes,
	IStrapiCouponAttributes
} from '../types/api.type';
import { BASE_URL, SITENAME } from './utils/apiUrls.util';

function parsePriceToNumber(priceString: string | null): number {
	if (!priceString) return 0;
	const cleanString = priceString.replace(/[R$\s]/g, '').replace('.', '').replace(',', '.');
	return parseFloat(cleanString) || 0;
}

export async function getProducts(start = 0, limit = 20): Promise<IProduct[]> {
	const endpoint = `/products?sitename=${SITENAME}&start=${start}&limit=${limit}`;
	const response = await fetch(`${BASE_URL}${endpoint}`);

	if (!response.ok) throw new Error('Failed to search for products.');

	const json: IStrapiResponse<IStrapiProductAttributes> = await response.json();

	return json.data.map((item) => ({
		id: item.id,
		title: item.attributes.title,
		image: item.attributes.image,
		priceFormatted: item.attributes.price,
		priceNumeric: parsePriceToNumber(item.attributes.price),
		priceFromFormatted: item.attributes.price_from,
		link: item.attributes.link,
		seller: item.attributes.seller,
		coupon: item.attributes.coupon,
	}));
}

export async function getCoupons(start = 0, limit = 10): Promise<ICoupon[]> {
	const endpoint = `/coupons/public?sitename=${SITENAME}&start=${start}&limit=${limit}&featured=false`;
	const response = await fetch(`${BASE_URL}${endpoint}`);

	if (!response.ok) throw new Error('Failed to search for coupons.');

	const json: IStrapiResponse<IStrapiCouponAttributes> = await response.json();

	return json.data.map((item) => ({
		id: item.id,
		code: item.attributes.code,
		discount: item.attributes.discount,
		title: item.attributes.title,
		description: item.attributes.description,
		seller: item.attributes.seller,
	}));
}

export async function getProductsByCoupon(couponName: string, start = 0, limit = 20): Promise<IProduct[]> {
	const endpoint = `/products?sitename=${SITENAME}&start=${start}&limit=${limit}&coupon=${couponName}`;
	const response = await fetch(`${BASE_URL}${endpoint}`);

	if (!response.ok) throw new Error('Failed to search for products using coupon');

	const json: IStrapiResponse<IStrapiProductAttributes> = await response.json();

	return json.data.map((item) => ({
		id: item.id,
		title: item.attributes.title,
		image: item.attributes.image,
		priceFormatted: item.attributes.price,
		priceNumeric: parsePriceToNumber(item.attributes.price),
		priceFromFormatted: item.attributes.price_from,
		link: item.attributes.link,
		seller: item.attributes.seller,
		coupon: item.attributes.coupon,
	}));
}