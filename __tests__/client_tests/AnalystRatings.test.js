import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnalystRatings from '../../client/Components/AnalystRatings.jsx';

Enzyme.configure({adapter: new Adapter()});

it('displays the AnalystRatings', () => {
  const wrapper = shallow(<AnalystRatings />);
  expect(wrapper.exists()).toBe(true);
});

it('calls componentDidMount', () => {
  jest.spyOn(AnalystRatings.prototype, 'componentDidMount');
  const wrapper = shallow(<AnalystRatings />);
  expect(AnalystRatings.prototype.componentDidMount.mock.calls.length).toBe(1);
});


// Test the GET request
jest.mock('jquery');
beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {
  const $ = require('jquery');
  const AnalystRatings = require('../Components/AnalystRatings.jsx');

  const dummyCallback = () => {};
  getAnalystRatings(dummyCallback);

  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://localhost:3000/analystRatings',
  });
});


// Need to fix this test
/*
it('calls the callback when $.ajax requests are finished', () => {
  const $ = require('jquery');
  const AnalystRatings = require('../Components/AnalystRatings.jsx');

  const callback = jest.fn();
  getAnalystRatings('ASX', callback);

  $.ajax.mock.calls[0][0].success({
    ticker: 'ASX',
    companyName: 'Advanced Semiconductor Engineering, Inc.',
    ratingCountBuys: 7,
    ratingCountHolds: 1,
    ratingCountSells: 21,
    buySummary: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    sellSummary: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'
  });

  expect(callback.mock.calls[0][0]).toEqual({
    // need to fix
  });
});
*/