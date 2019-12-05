import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextSummaries from '../Components/TextSummaries.jsx';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextSummaries />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// I am still looking into how to appropriately tests that a list renders as expected, with the correct number of items for the TextSummaries and RatingBars components.