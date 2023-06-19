import {styled} from '@/common/themes/common';
import {FormInput} from '@/components/form-input';
import {type Ingredient} from '@/models/ingredient';
import React, {type PropsWithChildren, useState} from 'react';

export type IngredientInputProperties = {
	index: number;
	onChange: (
		index: number,
		ingredient: Pick<Ingredient, 'name' | 'icon'>,
	) => void;
} & PropsWithChildren;

const Container = styled('div', {
	display: 'flex',
	flexDirection: 'row',
});

export function IngredientInput({
	index,
	onChange,
	...properties
}: IngredientInputProperties) {
	const [ingredient, setIngredient] = useState<
	Pick<Ingredient, 'name' | 'icon'>
	>({name: '', icon: ''});

	function handleIngredientChange(
		event: React.ChangeEvent<HTMLInputElement>,
	) {
		const newIngredient = {
			...ingredient,
			[event.target.name]: event.target.value,
		};

		setIngredient(newIngredient);
		onChange(index, newIngredient);
	}

	return (
		<Container {...properties}>
			<FormInput
				type='text'
				name='name'
				onChange={handleIngredientChange}
				value={ingredient.name}
				placeholder='Ingredient Name'
			/>
			<FormInput
				type='text'
				name='icon'
				onChange={handleIngredientChange}
				value={ingredient.icon}
				placeholder='Ingredient Icon'
			/>
		</Container>
	);
}
