import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircleSummary from '../Components/CircleSummary.jsx';

Enzyme.configure({adapter: new Adapter()});


it('displays the circle summary', () => {
  const wrapper = shallow(<CircleSummary />);
  expect(wrapper.exists()).toBe(true);
});


// Check that props are all there - this is not working right now
let wrap = mount(<CircleSummary />);
wrap.setProps({ name: 'Buy' });
wrap.setProps({ totalRatings: '40' });

expect('percent' in wrap.props()).toEqual(true);
expect('totalRatings' in wrap.props()).toEqual(true);