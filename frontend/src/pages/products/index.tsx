import React, {useState, useEffect} from 'react';
import {createProduct, fetchProducts} from '@/services/products';
import {type Product} from '@/models/product';
import {styled} from '@/common/themes/common';
import {Title} from '@/components/title';
import {Form} from '@/components/form';
import {Button} from '@/components/button';
import {FormInput} from '@/components/form-input';
import {Row} from '@/components/row';
import {CategoryInput} from './components/category-input';
import {IngredientsForm} from './components/ingredients-form';
import {objectToFormData} from '@/utils/object-to-form-data';

const Container = styled('div', {
	backgroundColor: '$background',
	padding: '$medium',
	borderRadius: '$medium',
	fontFamily: '$sans',
	fontSize: '$body1',
	fontWeight: '$normal',
	color: '$text',
});

const blankProduct = {
	name: '',
	description: '',
	price: '0',
	category: '',
	ingredients: [] as Array<{name: string; icon: string}>,
	image: new File([], ''),
};

export function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [newProduct, setNewProduct] = useState(blankProduct);
	const [numberOfIngredients, setNumberOfIngredients] = useState(1);

	useEffect(() => {
		handleFetchProducts().catch(error => {
			console.error(error);
		});
	}, []);

	async function handleFetchProducts() {
		setProducts(await fetchProducts());
	}

	async function handleCreateProduct() {
		console.log(objectToFormData(newProduct));
		try {
			await createProduct(objectToFormData(newProduct));
			setNewProduct(blankProduct);
			handleFetchProducts().catch(error => {
				console.error(error);
			});
		} catch (error) {
			console.error(error);
		}
	}

	function handleInputChange(
		event:
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLSelectElement>,
	) {
		setNewProduct({
			...newProduct,
			[event.target.name]: event.target.value,
		});
	}

	function handleInputImageChange(
		event: React.ChangeEvent<HTMLInputElement>,
	) {
		if (event.target.files) {
			setNewProduct({
				...newProduct,
				image: {
					filename: event.target.files[0].name,
					data: event.target.files[0],
				},
			});
		}
	}

	function handleIngredientChange(
		ingredients: Array<Pick<Ingredient, 'name' | 'icon'>>,
	) {
		setNewProduct({
			...newProduct,
			ingredients,
		});
	}

	return (
		<Container>
			<Title>Products</Title>

			{products.map(product => (
				<Row key={product._id}>
					<pre>
						<code>{JSON.stringify(product, null, 2)}</code>
					</pre>
				</Row>
			))}

			<Form title='Create a new product'>
				<FormInput
					type='text'
					name='name'
					value={newProduct.name}
					onChange={handleInputChange}
					placeholder='Product name'
				/>

				<FormInput
					type='text'
					name='description'
					value={newProduct.description}
					onChange={handleInputChange}
					placeholder='Product description'
				/>

				<FormInput
					type='number'
					name='price'
					value={newProduct.price}
					onChange={handleInputChange}
					placeholder='Product price'
				/>

				<CategoryInput
					name='category'
					value={newProduct.category}
					onChange={handleInputChange}
				/>

				<FormInput
					type='file'
					name='image'
					onChange={handleInputImageChange}
					placeholder='Product image'
				/>

				<IngredientsForm onChange={handleIngredientChange} />

				<Button onClick={handleCreateProduct}>Create Product</Button>
			</Form>
		</Container>
	);
}
