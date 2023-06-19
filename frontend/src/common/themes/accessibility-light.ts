import {teal, plum, slate, tomato} from '@radix-ui/colors';
import {createTheme} from './common';

// TODO: This is a copy of light. Create a new theme.
export const accessibilityLightTheme = createTheme({
	colors: {
		primary: plum.plum9,
		secondary: plum.plum10,
		background: tomato.tomato1,
		'alternative-background': tomato.tomato2,
		'ui-background': plum.plum3,
		'ui-background-hover': plum.plum4,
		'ui-background-active': plum.plum5,
		'ui-border': teal.teal7,
		'ui-border-hover': teal.teal8,
		border: teal.teal6,
		text: slate.slate11,
		'contrast-text': slate.slate12,
	},
});
