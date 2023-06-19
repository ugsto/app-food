import React from 'react';
import {ThemeSwitch} from './layout/theme-switch';
import {ContextProvider} from './hooks/context/context-provider';

export function App() {
	return (
		<ContextProvider>
			<header>
				<ThemeSwitch />
			</header>
			<main></main>
			<footer></footer>
		</ContextProvider>
	);
}
