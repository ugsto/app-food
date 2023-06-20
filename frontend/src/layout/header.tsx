import {styled} from '@/common/themes/common';
import React from 'react';
import {type PropsWithChildren} from 'react';

export type HeaderProperties = Record<string, unknown> & PropsWithChildren;

const Container = styled('header', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
});

export function Header({children}: HeaderProperties) {
	return <Container>{children}</Container>;
}
