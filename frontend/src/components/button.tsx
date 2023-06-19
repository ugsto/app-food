import { styled } from '@/common/themes/common';

export const Button = styled('button', {
    padding: '$small-medium',
    borderRadius: '$small',
    backgroundColor: '$primary',
    color: '$contrast-text',
    fontSize: '$body1',
    fontWeight: '$bold',
    cursor: 'pointer',

    ':hover': {
        backgroundColor: '$secondary',
    },
});
