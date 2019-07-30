import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('<List />', () => {
  const id = '4';
  const header = 'Fourth list';
  const cards = [
    { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
  ];

  it('renders without crashing', () => {
    // Create a DOM element to render the component into

    const div = document.createElement('div');

    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<List key={id} header={header} cards={cards} />, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<List key={id} header={header} cards={cards} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
