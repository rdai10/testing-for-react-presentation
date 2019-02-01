import React from 'react';

import {
	Code,
	CodePane,
	ComponentPlayground,
	Deck,
	Heading,
	Image,
	List,
	ListItem,
	Slide,
	Text
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
	{
		primary: '#FF5252',
		secondary: '#70788C',
		theme: '#FFF',
		base: '#2A303E'
	},
	{
		primary: 'Open Sans',
		secondary: 'Roboto Mono'
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={['fade']} transitionDuration={300} theme={theme}>
				<Slide bgColor="base">
					<Heading size={1} fit lineHeight={1} textColor="theme">
						Practical Testing for React
					</Heading>

					<Heading size={6} textColor="primary" caps>
						sharing
					</Heading>

					<Text size={7} textColor="secondary">
						Rebecca Dai
					</Text>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Typography
					</Heading>
					<Heading size={1} textColor="theme">
						Heading 1
					</Heading>
					<Heading size={2} textColor="secondary">
						Heading 2
					</Heading>
					<Heading size={3} textColor="secondary">
						Heading 3
					</Heading>
					<Heading size={4} textColor="secondary">
						Heading 4
					</Heading>
					<Heading size={5} textColor="secondary">
						Heading 5
					</Heading>
					<Text size={6} textColor="secondary">
						Standard text
					</Text>
				</Slide>

				<Slide bgColor="base" textColor="secondary">
					<Heading size={6} textColor="primary" caps>
						Standard List
					</Heading>
					<List>
						<ListItem>Item 1</ListItem>
						<ListItem>Item 2</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base" textColor="secondary">
					<CodePane
						lang="jsx"
						source={require('raw-loader!../assets/code.example')}
					/>
				</Slide>
			</Deck>
		);
	}
}
