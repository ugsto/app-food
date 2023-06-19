import React, {type SelectHTMLAttributes} from 'react';
import {type Category} from '@/models/category';
import {fetchCategories} from '@/services/categories';
import {useEffect, useState} from 'react';
import {FormSelect} from '@/components/form-select';

export type CategoryInputProperties = SelectHTMLAttributes<HTMLSelectElement>;

export function CategoryInput({...properties}: CategoryInputProperties) {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		handleFetchCategories().catch(error => {
			console.error(error);
		});
	});

	async function handleFetchCategories() {
		setCategories(await fetchCategories());
	}

	return (
		<FormSelect {...properties}>
			<option value={''} hidden>Select a category</option>
			{categories.map(category => (
				<option key={category._id} value={category._id}>
					{category.name}
				</option>
			))}
		</FormSelect>
	);
}
