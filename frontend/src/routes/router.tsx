import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {CategoryPage} from '@/pages/categories/index';
import {ProductsPage} from '@/pages/products';
import {HomePage} from '@/pages/home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/categories',
		element: <CategoryPage />,
	},
	{
		path: '/products',
		element: <ProductsPage />,
	},
]);
