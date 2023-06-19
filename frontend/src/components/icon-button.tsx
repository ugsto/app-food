import React, {type PropsWithChildren} from 'react';
import {styled} from '@/common/themes/common';

export type IconButtonProperties = {
	height?: number | string;
	width?: number | string;
	color?: string;
	backgroundColor?: string;
} & PropsWithChildren;

export const Container = styled('button', {
	fontFamily: 'inherit',
	border: 'none',
	borderRadius: '$round',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	boxShadow: '$icon-button',
	cursor: 'pointer',
});

export function IconButton({
	children,
	height = 40,
	width = 40,
	color = '$text',
	backgroundColor = '$background',
	...properties
}: IconButtonProperties) {
	return (
		<Container
			css={{
				height,
				width,
				color,
				backgroundColor,
			}}
			{...properties}
		>
			{children}
		</Container>
	);
}
