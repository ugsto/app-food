import React, {useContext} from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Switch from '@radix-ui/react-switch';
import {Cross1Icon, EyeOpenIcon} from '@radix-ui/react-icons';
import {IconButton} from '@/components/icon-button';
import {styled} from '@/common/themes/common';
import {ThemeContext} from '@/hooks/context/theme';

const Trigger = styled(Popover.Trigger, {
	display: 'block',
	margin: '0 auto',
	width: 'max-content',
	height: 'max-content',
	backgroundColor: 'transparent',
});

const Content = styled(Popover.Content, {
	display: 'flex',
	flexDirection: 'column',
	gap: '$medium-large',
	padding: '$medium $medium-large',
	backgroundColor: '$ui-background',
	borderRadius: '$medium',
});

const SwitchContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$small-medium',
});

const Title = styled('h2', {
	fontSize: '$header2',
});

const Row = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '$medium',
});

const Label = styled('label', {
	fontSize: '$body1',
	fontWeight: '$light',
});

const SwitchRoot = styled(Switch.Root, {
	position: 'relative',
	width: 48,
	height: 24,
	backgroundColor: '$ui-background-active',
	borderRadius: '$round-square',
	cursor: 'pointer',
});

const SwitchThumb = styled(Switch.Thumb, {
	display: 'block',
	width: 20,
	height: 20,
	backgroundColor: '$primary',
	borderRadius: '$round',
	transform: 'translateX(0px)',
	transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',

	'&[data-state="checked"]': {
		transform: 'translateX(18px)',
	},
});

const Close = styled(Popover.Close, {
	width: 'max-content',
	height: 'max-content',
	backgroundColor: 'transparent',
	position: 'absolute',
	top: '$small',
	right: '$small',
});

const Arrow = styled(Popover.Arrow, {
	fill: '$alternative-background',
});

export function ThemeSwitch() {
	const {light, accessibility, setLight, setAccessibility}
        = useContext(ThemeContext);

	function handleThemeChange(light: boolean, accessibility: boolean) {
		setLight(light);
		setAccessibility(accessibility);
	}

	return (
		<Popover.Root>
			<Trigger>
				<IconButton
					height={24}
					width={24}
					color='$secondary'
					backgroundColor='$alternative-background'
				>
					<EyeOpenIcon />
				</IconButton>
			</Trigger>
			<Popover.Portal>
				<Content sideOffset={5}>
					<Title>Theme</Title>
					<SwitchContainer>
						<Row>
							<SwitchRoot
								id='light-dark-switch'
								onCheckedChange={() => {
									handleThemeChange(!light, accessibility);
								}}
								checked={!light}
							>
								<SwitchThumb />
							</SwitchRoot>
							<Label htmlFor='light-dark-switch'>
                                Light/Dark
							</Label>
						</Row>
						<Row>
							<SwitchRoot
								id='accessibility-switch'
								onCheckedChange={() => {
									handleThemeChange(light, !accessibility);
								}}
								checked={accessibility}
							>
								<SwitchThumb />
							</SwitchRoot>
							<Label htmlFor='accessibility-switch'>
                                Accessibility
							</Label>
						</Row>
					</SwitchContainer>
					<Close aria-label='Close' asChild>
						<IconButton
							height={24}
							width={24}
							color='$secondary'
							backgroundColor='transparent'
						>
							<Cross1Icon />
						</IconButton>
					</Close>
					<Arrow />
				</Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
