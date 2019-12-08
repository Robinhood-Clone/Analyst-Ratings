import React from 'react';
import RatingBar from './RatingBar.jsx';
import styled from 'styled-components';

const RatingBars = (props) => {

  return (
    <div>
      <div>{props.options.map((option)=> {
        return <RatingBar name={option.name} percent={option.percent} key={option.name}></RatingBar>;
      })}</div>
    </div>
  );

};

export default RatingBars;