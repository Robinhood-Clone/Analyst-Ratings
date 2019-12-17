import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../client/Components/Header.jsx';

Enzyme.configure({adapter: new Adapter()});

// Tested with enzyme
it('displays the Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true);
});

// Tested without enzyme
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
