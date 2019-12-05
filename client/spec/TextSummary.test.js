import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextSummary from '../Components/TextSummary.jsx';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Need to revisit the below, the intention is to ensure clicking the "Read More" and "Read Less" "buttons" change state appropriately
describe('<TextSummary /> interactions', () => {
  it('should call the onClick function when \'Read More\' button is clicked', () => {
    const mockedHandleClickReadMore = jest.fn();
    wrapper.instance().handleClickAddComment = mockedHandleClickReadMore;
    wrapper.find(Button).first().props().onClick();
    expect(mockedHandleClickReadMore).toHaveBeenCalledTimes(1);
  });

  it('should call the onClick function when \'Read Less\' button is clicked', () => {
    const mockedHandleClickReadLess = jest.fn();
    wrapper.instance().handleClickAddComment = mockedHandleClickReadLess;
    wrapper.find(Button).first().props().onClick();
    expect(mockedHandleClickReadLess).toHaveBeenCalledTimes(1);
  });
});