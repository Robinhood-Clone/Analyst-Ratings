import React from 'react';
import TextSummary from './TextSummary.jsx';
import styled from 'styled-components';

const TextSummariesContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextSummaries = (props) => {

  return (
    <div>
      <TextSummariesContainerStyle>{props.options.map((option)=> {
        return <TextSummary name={option.name} summary={option.summary} buyPercent={option.buyPercent} key={option.name}></TextSummary>;
      })}</TextSummariesContainerStyle>
    </div>
  );

};

export default TextSummaries;