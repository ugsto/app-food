import React from 'react';
import {styled} from '@/common/themes/common';
import {type PropsWithChildren} from 'react';

export type FormProperties = {
	title: string;
} & PropsWithChildren;

export const Container = styled('form', {
	marginTop: '$large',
});

const FormTitle = styled('h2', {
	fontSize: '$header2',
	marginBottom: '$small-medium',
});

export function Form({children, title, ...properties}: FormProperties) {
	return (
		<Container
			{...properties}
			onSubmit={event => {
				event.preventDefault();
			}}
		>
			<FormTitle>{title}</FormTitle>
			{children}
		</Container>
	);
}
