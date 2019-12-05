import React from 'react';
import TextSummary from './TextSummary.jsx';

const TextSummaries = (props) => {

  return (
    <div>
      <div>{props.options.map((option)=> {
        return <TextSummary name={option.name} summary={option.summary} key={option.name}></TextSummary>;
      })}</div>
    </div>
  );

};

export default TextSummaries;