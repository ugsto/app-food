import {styled} from '@/common/themes/common';

export const FormSelect = styled('select', {
	display: 'block',
	padding: '$small-medium',
	marginBottom: '$small-medium',
	borderRadius: '$small',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: '$ui-border',
	backgroundColor: '$ui-background',
	color: '$text',
	fontSize: '$body1',

	':hover': {
		borderColor: '$ui-border-hover',
	},

	':focus': {
		borderColor: '$primary',
		outline: 'none',
	},
});
