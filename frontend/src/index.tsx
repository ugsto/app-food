import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './app';
import './common/styles/reset.css';
import './common/styles/global.scss';

const rootElement = document.querySelector('#root')!;
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
