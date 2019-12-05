import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBars from '../Components/RatingBars.jsx';

Enzyme.configure({adapter: new Adapter()});

it('displays the Rating Bars', () => {
  const wrapper = shallow(<RatingBars />);
  expect(wrapper.exists()).toBe(true);
});


describe('List tests', () => {
  it('renders list-items', () => {
    const items = [{name: 'one', percent: '10%'}, {name: 'two', percent: '20%'}, {name: 'three', percent: '30%'}];
    const wrapper = shallow(<RatingBars name={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = ['Thor', 'Loki'];
    const wrapper = shallow(<RatingBars items={items} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = shallow(<RatingBars items={items} />);

    //Expect the child of the first item to be an array
    expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  });
});