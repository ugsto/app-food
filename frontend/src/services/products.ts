import {apiUrl} from '@/configs/api';
import {type Ingredient} from '@/models/ingredient';
import {type Product} from '@/models/product';
import axios from 'axios';

export async function fetchProducts() {
	const response = await axios.get<Product[]>(`${apiUrl}/products`);

	return response.data;
}

export type InputProduct = Pick<
Product,
'name' | 'description' | 'price' | 'category'
> & {image: File} & {ingredients: Array<Pick<Ingredient, 'name' | 'icon'>>};

export async function createProduct(product: FormData) {
	const response = await axios.post<Product>(`${apiUrl}/products`, product, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
}
