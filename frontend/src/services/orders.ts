import {apiUrl} from '@/configs/api';
import {type Order} from '@/models/order';
import {type Product} from '@/models/product';
import axios from 'axios';

export async function fetchOrders() {
	const response = await axios.get<Order[]>(`${apiUrl}/categories`);

	return response.data;
}

export type InputOrder = Pick<Order, 'table'> & {
	products: Array<{product: Product['_id']; quantity: number}>;
};

export async function createOrder(order: InputOrder) {
	const response = await axios.post<Order>(`${apiUrl}/categories`, order);

	return response.data;
}
