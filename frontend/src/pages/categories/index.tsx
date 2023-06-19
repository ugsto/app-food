import React, {useState, useEffect} from 'react';
import {createCategory, fetchCategories} from '@/services/categories';
import {type Category} from '@/models/category';
import {styled} from '@/common/themes/common';
import {Title} from '@/components/title';
import {Form} from '@/components/form';
import {Button} from '@/components/button';
import {FormInput} from '@/components/form-input';
import {CategoryName} from './components/name';
import {CategoryIcon} from './components/icon';
import { Row } from '@/components/row';

const Container = styled('div', {
	backgroundColor: '$background',
	padding: '$medium',
	borderRadius: '$medium',
	fontFamily: '$sans',
	fontSize: '$body1',
	fontWeight: '$normal',
	color: '$text',
});

export function CategoryPage() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [newCategory, setNewCategory] = useState({name: '', icon: ''});

	useEffect(() => {
		handleFetchCategories().catch(error => {
			console.error(error);
		});
	}, []);

	async function handleFetchCategories() {
		setCategories(await fetchCategories());
	}

	async function handleCreateCategory() {
		try {
			await createCategory(newCategory);
			setNewCategory({name: '', icon: ''});
			handleFetchCategories().catch(error => {
				console.error(error);
			});
		} catch (error) {
			console.error(error);
		}
	}

	async function handleInputChange(
		event: React.ChangeEvent<HTMLInputElement>,
	) {
		setNewCategory({
			...newCategory,
			[event.target.name]: event.target.value,
		});
	}

	return (
		<Container>
			<Title>Categories</Title>

			{categories.map(category => (
				<Row key={category._id}>
					<CategoryName>{category.name}</CategoryName>
					<CategoryIcon>{category.icon}</CategoryIcon>
				</Row>
			))}

			<Form title='Create a new category'>
				<FormInput
					type='text'
					name='name'
					value={newCategory.name}
					onChange={handleInputChange}
					placeholder='Category name'
				/>

				<FormInput
					type='text'
					name='icon'
					value={newCategory.icon}
					onChange={handleInputChange}
					placeholder='Category icon'
				/>

				<Button onClick={handleCreateCategory}>Create Category</Button>
			</Form>
		</Container>
	);
}
