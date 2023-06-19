import {styled} from '@/common/themes/common';
import {type Ingredient} from '@/models/ingredient';
import React, {type PropsWithChildren, useEffect, useState} from 'react';
import {IngredientInput} from './ingredient-input';
import {Button} from '@/components/button';
import {PlusIcon} from '@radix-ui/react-icons';

export type IngredientsFormProperties = {
	onChange: (ingredients: Array<Pick<Ingredient, 'name' | 'icon'>>) => void;
} & PropsWithChildren;

const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '$medium',
});

const CreateIngredientButton = styled(Button, {
	display: 'flex',
	alignItems: 'center',
	gap: '$small',
	width: 'fit-content',
	backgroundColor: '$ui-background',

	'&:hover': {
		backgroundColor: '$ui-background-hover',
	},
});

export function IngredientsForm({
	onChange,
	...properties
}: IngredientsFormProperties) {
	const [ingredients, setIngredients] = useState<
	Array<Pick<Ingredient, 'name' | 'icon'>>
	>([{name: '', icon: ''}]);

	useEffect(() => {
		onChange(ingredients);
	}, [ingredients]);

	function handleAddIngredient() {
		setIngredients(currentIngredients => [
			...currentIngredients,
			{name: '', icon: ''},
		]);
	}

	function handleOnIngredientChange(
		index: number,
		ingredient: Pick<Ingredient, 'name' | 'icon'>,
	) {
		setIngredients(currentIngredients => {
			const newIngredients = [...currentIngredients];
			// eslint-disable-next-line security/detect-object-injection
			newIngredients[index] = ingredient;
			return newIngredients;
		});
	}

	return (
		<Container {...properties}>
			{ingredients.map((_, index) => (
				<IngredientInput
					key={index}
					index={index}
					onChange={handleOnIngredientChange}
				/>
			))}
			<CreateIngredientButton onClick={handleAddIngredient}>
                Add Ingredient <PlusIcon />
			</CreateIngredientButton>
		</Container>
	);
}
