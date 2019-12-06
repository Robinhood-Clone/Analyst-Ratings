import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircleSummary from '../../client/Components/CircleSummary.jsx';

Enzyme.configure({adapter: new Adapter()});


it('displays the circle summary', () => {
  const wrapper = shallow(<CircleSummary />);
  expect(wrapper.exists()).toBe(true);
});


// Check that props are all there - this is not working right now, need to fix
let wrap = mount(<CircleSummary />);
wrap.setProps({ percent: '30%' });
wrap.setProps({ totalRatings: '40' });

expect('percent' in wrap.props()).toEqual(true);
expect('totalRatings' in wrap.props()).toEqual(true);