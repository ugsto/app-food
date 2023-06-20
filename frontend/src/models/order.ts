import {type Product} from './product';

export type Order = {
	_id: string;
	table: string;
	status: string;
	products: Product[];
	creatdAt: string;
	__v: number;
};
