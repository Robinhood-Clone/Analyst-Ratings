
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnalystRatings from '../Components/AnalystRatings.jsx';

Enzyme.configure({adapter: new Adapter()});

it('displays the Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true);
});


// Test the GET request
jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {
  const $ = require('jquery');
  const App = require('../Components/App.jsx');

  // Call into the function we want to test
  const dummyCallback = () => {};
  getAnalystRatings(dummyCallback);

  // Now make sure that $.ajax was properly called during the previous
  // 2 lines
  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://localhost:3000/analystRatings',
  });
});

it('calls the callback when $.ajax requests are finished', () => {
  const $ = require('jquery');
  const fetchCurrentUser = require('../fetchCurrentUser');

  // Create a mock function for our callback
  const callback = jest.fn();
  getAnalystRatings(callback);

  // Now we emulate the process by which `$.ajax` would execute its own
  // callback
  $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
    firstName: 'Bobby',
    lastName: 'Marley',
  });

  // And finally we assert that this emulated call by `$.ajax` incurred a
  // call back into the mock function we provided as a callback
  expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
    fullName: 'Bobby Marley',
    loggedIn: true,
  });
});