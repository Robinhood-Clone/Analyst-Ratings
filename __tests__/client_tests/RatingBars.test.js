import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBars from '../../client/Components/RatingBars.jsx';

Enzyme.configure({adapter: new Adapter()});

it('displays the Rating Bars', () => {
  const wrapper = shallow(<RatingBars />);
  expect(wrapper.exists()).toBe(true);
});


// I am still looking into how to appropriately tests that a list renders as expected, with the correct number of items for the TextSummaries and RatingBars components.