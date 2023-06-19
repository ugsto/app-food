import {plumDark, slateDark, tealDark, tomatoDark} from '@radix-ui/colors';
import {createTheme} from './common';

// TODO: This is a copy of dark. Create a new theme.
export const accessibilityDarkTheme = createTheme({
	colors: {
		primary: plumDark.plum9,
		secondary: plumDark.plum10,
		background: tomatoDark.tomato1,
		'alternative-background': tomatoDark.tomato2,
		'ui-background': plumDark.plum3,
		'ui-background-hover': plumDark.plum4,
		'ui-background-active': plumDark.plum5,
		'ui-border': tealDark.teal7,
		'ui-border-hover': tealDark.teal8,
		border: tealDark.teal6,
		text: slateDark.slate11,
		'contrast-text': slateDark.slate12,
	},
});
