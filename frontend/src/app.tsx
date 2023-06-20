import React from 'react';
import {ThemeSwitch} from './layout/theme-switch';
import {ContextProvider} from './hooks/context/context-provider';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/router';
import {Navbar} from './layout/nav-bar';
import {Header} from './layout/header';

export function App() {
	return (
		<ContextProvider>
			<Header>
				<Navbar />
				<ThemeSwitch />
			</Header>
			<main>
				<RouterProvider router={router} />
			</main>
			<footer></footer>
		</ContextProvider>
	);
}
