import {apiUrl} from '@/configs/api';
import {type Category} from '@/models/category';
import axios from 'axios';

export async function fetchCategories() {
	const response = await axios.get<Category[]>(`${apiUrl}/categories`);

	return response.data;
}

export async function createCategory(
	category: Pick<Category, 'name' | 'icon'>,
) {
	const response = await axios.post<Category>(
		`${apiUrl}/categories`,
		category,
	);

	return response.data;
}
