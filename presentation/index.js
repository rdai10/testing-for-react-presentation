import React from 'react';

import {
	Appear,
	Code,
	CodePane,
	Deck,
	Fill,
	Fit,
	Heading,
	Image,
	List,
	ListItem,
	Slide,
	Table,
	TableHeaderItem,
	TableItem,
	TableRow,
	Text
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
	accordion: require('../assets/shallowRenderedAccordion.png')
};

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
					<Heading size={6} textColor="primary" caps>
						It was hard!
					</Heading>

					<List textColor="theme">
						<ListItem>
							Difficult to understand the intention of the original code
						</ListItem>
						<ListItem>Long development cycle, hard to add new feature</ListItem>
						<ListItem>Regressions</ListItem>
						<ListItem>
							Existing features that the product owners were not aware existed
						</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						No code confidence 😢
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

					<List textColor="theme">
						<ListItem>
							Getting into a habit of writing tests forces a developer to think
							about possible bugs and corner cases for a feature
						</ListItem>
						<ListItem>Good way of preventing regressions</ListItem>
						<ListItem>
							Provides support for refactoring, which was a constant complaint
							that came up in our team retros
						</ListItem>
						<ListItem>Tests as an augmentation to documentation</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="theme">
						But we didn't start writing tests right away
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						"Writing tests doubles development time!"
					</Heading>

					<List textColor="theme">
						<Appear>
							<ListItem>
								It takes more time to manually test and retest features.
							</ListItem>
						</Appear>
						<Appear>
							<ListItem>
								It takes more time to write tests after a feature is completed
								rather than before.
							</ListItem>
						</Appear>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						"Each time we refactor we have to rewrite all the tests!"
					</Heading>

					<List textColor="theme">
						<Appear>
							<ListItem>
								Maybe we can approach how we write tests differently
							</ListItem>
						</Appear>
						<Appear>
							<ListItem>
								Test the API rather than the implementation details
							</ListItem>
						</Appear>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="theme">
						Use Jest as the testing framework that fulfills the role of test
						runner, assertion library, and mock library.
					</Heading>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="theme">
						Let's start simple with a smoke test
					</Heading>

					<CodePane
						textSize="32px"
						margin="40px 0 0 0"
						lang="jsx"
						source={require('raw-loader!../assets/smokeTest.example')}
					/>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Snapshot Testing
					</Heading>

					<Text textColor="theme" margin="40px 0 0 0">
						Takes a snapshot of a rendered component and compares it to a
						reference to make sure the UI didn't change unexpectantly.
					</Text>
				</Slide>

				<Slide align="top" bgColor="base">
					<CodePane
						textSize="11px"
						lang="javascript"
						source={require('raw-loader!../assets/accordion.example')}
					/>
				</Slide>

				<Slide align="top" bgColor="base">
					<CodePane
						margin="40px 0 0 0"
						textSize="28px"
						lang="jsx"
						source={require('raw-loader!../assets/accordionSnapshotTest.example')}
					/>
				</Slide>

				<Slide align="top" bgColor="base">
					<CodePane
						margin="40px 0 0 0"
						textSize="18px"
						lang="jsx"
						source={require('raw-loader!../assets/accordionSnap.example')}
					/>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Snapshot Testing
					</Heading>

					<Table margin="40px 0 0 0" textColor="theme">
						<TableRow>
							<TableHeaderItem>Pros</TableHeaderItem>
							<TableHeaderItem>Cons</TableHeaderItem>
						</TableRow>
						<TableRow>
							<TableItem>Good for functional components</TableItem>
							<TableItem>Requires manual inspection</TableItem>
						</TableRow>
						<TableRow>
							<TableItem>Easy to write</TableItem>
							<TableItem>Alot of snapshots could fail at once</TableItem>
						</TableRow>
					</Table>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Testing libraries
					</Heading>

					<List textColor="theme" margin="40px 0 0 0">
						<ListItem>Test Utilities</ListItem>
						<ListItem>Enzyme</ListItem>
						<ListItem>React Testing Library</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Enzyme
					</Heading>

					<List textColor="theme">
						<ListItem>Built by Airbnb</ListItem>
						<ListItem>Wide adoption</ListItem>
						<ListItem>
							Make sure to install the right version cooresponding adapter and
							configure it
						</ListItem>
						<ListItem>Robust API</ListItem>
						<ListItem>Can test lifecycle methods</ListItem>
						<ListItem>
							People tend to prefer Enzyme for shallow rendering
						</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Shallow Rendering
					</Heading>

					<List textColor="theme">
						<ListItem>
							Renders the parent component without any of its children
						</ListItem>
						<ListItem>Good for testing in isolation</ListItem>
						<ListItem>
							Can help prevent snapshot tests from breaking all the time
						</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base" align="top">
					<CodePane
						textSize="20px"
						margin="40px 0 0 0"
						lang="jsx"
						source={require('raw-loader!../assets/shallowRenderingTest.example')}
					/>

					<Appear>
						<Image src={images.accordion} width={980} />
					</Appear>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="theme">
						Beware of testing implementation details:
					</Heading>

					<Appear>
						<CodePane
							margin="40px 0 0 0"
							textSize="24px"
							lang="jsx"
							source={require('raw-loader!../assets/implementationDetail.example')}
						/>
					</Appear>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						React Testing Library
					</Heading>

					<List textColor="theme">
						<ListItem>
							A way to test react components to resemble how an end user would
							interact with the component
						</ListItem>
						<ListItem>Avoids testing implementation details</ListItem>
						<ListItem>Easy set up</ListItem>
						<ListItem>
							Built on top of <Code bgColor="theme">dom-testing-library</Code>
						</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base" align="top">
					<CodePane
						margin="40px 0 0 0"
						textSize="24px"
						lang="jsx"
						source={require('raw-loader!../assets/reactTestingLibrary.example')}
					/>
				</Slide>

				<Slide bgColor="base">
					<Heading size={6} textColor="primary" caps>
						Take away:
					</Heading>

					<List textColor="theme">
						<ListItem>There's no one size fits all solution to do testing</ListItem>
						<ListItem>Any test is better than no test</ListItem>
					</List>
				</Slide>

				<Slide bgColor="base">
					<Heading size={3} textColor="primary" caps>
						Thank you!
					</Heading>
				</Slide>
			</Deck>
		);
	}
}
