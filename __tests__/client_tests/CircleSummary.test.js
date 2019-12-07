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
wrap.setProps({ percent: '30%', totalRatings: 40 });

expect('30%' in wrap.props()).toEqual(true);
expect('40' in wrap.props()).toEqual(true);

const user = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  username: 'johndoe',
  image: null
};

describe ('<CircleSummary />', () => {
  it ('accepts user props', () => {
    const wrapper = mount(<Profile user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });


});