import React from 'react';
import ReactDOM from 'react-dom';
//import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});