import {accessibilityDarkTheme} from '@/common/themes/accessibility-dark';
import {accessibilityLightTheme} from '@/common/themes/accessibility-light';
import {darkTheme} from '@/common/themes/dark';
import {lightTheme} from '@/common/themes/light';
import React, {
	type PropsWithChildren,
	createContext,
	useState,
	useEffect,
} from 'react';

export type ThemeProviderProperties = Record<string, unknown> &
PropsWithChildren;

const themes = {
	accessibilityOn: {
		light: accessibilityLightTheme,
		dark: accessibilityDarkTheme,
	},
	accessibilityOff: {
		light: lightTheme,
		dark: darkTheme,
	},
};

export const ThemeContext = createContext<{
	light: boolean;
	accessibility: boolean;
	setLight: (light: boolean) => void;
	setAccessibility: (accessibility: boolean) => void;
}>({
			light: true,
			accessibility: false,
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			setLight() {},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			setAccessibility() {},
		});

function cleanThemes() {
	for (const accessibilityState of Object.keys(themes)) {
		for (const lightState of Object.keys(
			themes[accessibilityState as keyof typeof themes],
		)) {
			const theme
                = themes[accessibilityState as keyof typeof themes][
                	lightState as keyof typeof themes.accessibilityOn
                ];

			document.body.classList.remove(theme);
		}
	}
}

function changeTheme(light: boolean, accessibility: boolean) {
	cleanThemes();

	const theme = (
		accessibility ? themes.accessibilityOn : themes.accessibilityOff
	)[light ? 'light' : 'dark'];

	document.body.classList.add(theme);
}

export function ThemeProvider({children}: {children: React.ReactNode}) {
	const [light, setLight] = useState<boolean>(true);
	const [accessibility, setAccessibility] = useState<boolean>(false);

	useEffect(() => {
		changeTheme(light, accessibility);
	}, [light, accessibility]);

	return (
		<ThemeContext.Provider
			value={{
				light,
				accessibility,
				setLight,
				setAccessibility,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
