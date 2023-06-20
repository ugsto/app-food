import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {styled} from '@/common/themes/common';

const Root = styled(NavigationMenu.Root, {
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	width: '33vw',
	zIndex: 1,
});

const List = styled(NavigationMenu.List, {
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '$ui-background',
	padding: 4,
	borderRadius: 6,
	listStyle: 'none',
	width: '33vw',
	margin: 0,
});

const Link = styled(NavigationMenu.Link, {
	display: 'inline-block',
	padding: '0 10px',
	color: '$text',
	textDecoration: 'underline',
	lineHeight: '40px',

	'&:hover': {
		color: '$primary',
	},
});

export function Navbar() {
	return (
		<Root>
			<List>
				<NavigationMenu.Item>
					<Link asChild>
						<a href='/'>Home</a>
					</Link>
					<Link asChild>
						<a href='/categories'>Categories</a>
					</Link>
					<Link asChild>
						<a href='/products'>Products</a>
					</Link>
				</NavigationMenu.Item>
				<NavigationMenu.Indicator />
			</List>
		</Root>
	);
}
