import React from 'react';
import {type PropsWithChildren} from 'react';
import {ThemeProvider} from './theme';

export type ContextProviderProperties = Record<string, unknown> &
PropsWithChildren;

export function ContextProvider({children}: ContextProviderProperties) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
