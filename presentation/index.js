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
						Practical Testing for <Text textColor="primary">React</Text>
					</Heading>

					<Text size={7} textColor="secondary">
						Rebecca Dai
					</Text>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						Share some of my experiences...
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						It began with LESA
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						What we were doing: Migrating and refactoring LESA code (6.0 -> DXP 7.0) while adding new features.
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						It was hard!
					</Heading>

					<List>
						<ListItem>Difficult to understand the intention of the original code</ListItem>
						<ListItem>Long development cycle, hard to add new feature</ListItem>
						<ListItem>Regressions</ListItem>
						<ListItem>Existing features that the product owners were not aware existed</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						No confidence 😢
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						How could it be better? 🤔💡
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Benefits of Testing
					</Heading>

					<List>
						<ListItem>Getting into a habit of writing tests forces a developer to think about possible bugs and corner cases for a feature</ListItem>
						<ListItem>Good way of preventing regressions</ListItem>
						<ListItem>Provides spport for refactoring, which was a constant complain that came up in our team retros</ListItem>
						<ListItem>Tests as an augmentation to documentation</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						But we didn't start writing tests right away
					</Heading>

					<List>
						<ListItem>"Writing tests doubles development time"</ListItem>
						<ListItem>"Each time we refactor we have to rewrite all the tests"</ListItem>
					</List>
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
					<CodePane
						lang="jsx"
						source={require('raw-loader!../assets/code.example')}
					/>
				</Slide>
			</Deck>
		);
	}
}
