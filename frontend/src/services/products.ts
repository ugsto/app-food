import {apiUrl} from '@/configs/api';
import {type Product} from '@/models/product';
import axios from 'axios';

export async function fetchProducts() {
	const response = await axios.get<Product[]>(`${apiUrl}/products`);

	return response.data;
}

export type InputProduct = Pick<
Product,
'name' | 'description' | 'price' | 'ingredients' | 'category'
> & {image: File};

export async function createProduct(product: InputProduct) {
	const response = await axios.post<Product>(`${apiUrl}/products`, product);

	return response.data;
}
