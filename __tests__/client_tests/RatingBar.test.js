import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBar from '../../client/Components/RatingBar.jsx';

Enzyme.configure({adapter: new Adapter()});

it('displays the Rating Bar', () => {
  const wrapper = shallow(<RatingBar />);
  expect(wrapper.exists()).toBe(true);
});


// Check that props are all there - this is not working right now, need to fix
let wrap = mount(<CircleSummary />);
wrap.setProps({ name: 'Buy' });
wrap.setProps({ percent: '20%' });

expect('name' in wrap.props()).toEqual(true);
expect('percent' in wrap.props()).toEqual(true);