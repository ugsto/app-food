import React from 'react';
import {ThemeSwitch} from './layout/theme-switch';
import {ContextProvider} from './hooks/context/context-provider';
import {CategoryPage} from './pages/categories';
import {ProductsPage} from './pages/products';

export function App() {
	return (
		<ContextProvider>
			<header>
				<ThemeSwitch />
			</header>
			<main>
				<ProductsPage />
			</main>
			<footer></footer>
		</ContextProvider>
	);
}
