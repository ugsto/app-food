import {blackA, teal, plum, slate, tomato} from '@radix-ui/colors';
import {createStitches} from '@stitches/react';

export const {theme, css, createTheme, styled} = createStitches({
	theme: {
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
		radii: {
			small: '0.125em',
			'small-medium': '0.25em',
			medium: '0.5em',
			'medium-large': '1em',
			large: '2em',
			round: '50%',
			'round-square': '9999px',
		},
		shadows: {
			'icon-button': `box-shadow: 2px 4px 8px -3px ${blackA.blackA2}`,
		},
		space: {
			small: '0.25em',
			'small-medium': '0.5em',
			medium: '1em',
			'medium-large': '1.75em',
			large: '2.5em',
		},
		fontSizes: {
			header1: '2.5em',
			header2: '2em',
			header3: '1.5em',
			header4: '1.25em',
			header5: '1em',
			header6: '0.875em',
			body1: '1em',
			body2: '0.875em',
			body3: '0.75em',
			body4: '0.625em',
			body5: '0.5em',
			body6: '0.375em',
		},
		fonts: {
			sans: 'Roboto, sans-serif',
		},
		fontWeights: {
			light: 300,
			normal: 400,
			bold: 700,
		},
	},
});
