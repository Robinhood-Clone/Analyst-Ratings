import React from 'react';
import RatingBar from './RatingBar.jsx';
import styled from 'styled-components';

const RatingBarsStyle = styled.div`

`;
const RatingBars = (props) => {

  return (
    <div>
      <RatingBarsStyle>{props.options.map((option)=> {
        return <RatingBar name={option.name} percent={option.percent} key={option.name}></RatingBar>;
      })}</RatingBarsStyle>
    </div>
  );

};

export default RatingBars;