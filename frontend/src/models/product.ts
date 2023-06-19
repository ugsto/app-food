import {type Ingredient} from './ingredient';

export type Product = {
	_id: string;
	name: string;
	description: string;
	imagePath: string;
	price: number;
	ingredients: Ingredient[];
	category: string;
	__v: number;
};
