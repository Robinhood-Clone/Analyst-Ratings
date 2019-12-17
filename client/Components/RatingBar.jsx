import React from 'react';
import styled from 'styled-components';
import colors from './Colors.jsx';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-left: 15px;
  margin-bottom: 20px;
  width: 460px;
`;

const BarSegmentSolid = styled.div`
  display: flex;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: ${(props)=> props.width}px;
  height: 6px;
`;

const BarSegmentGradient = styled.div`
  display: flex;
  flex-grow: 1;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 6px;
`;

const LabelText = styled.div`
  font-weight: 500;
  width: 35px;
`;

const PercentText = styled.div`
  font-weight: 500;
  margin-left: 3px;
  margin-right: 5px;
`;

const RatingBar = (props) => {
  let percentNum = props.percent.substring(0, props.percent.length - 1);
  let barWidth = percentNum / 100 * 460;

  let classNames;
  if (props.name === 'Buy') {
    classNames = ['fillRedOrGreenGlobalColor', 'lightRedOrGreenGlobalColor'];
  } else {
    classNames = ['ratingsBarSolid', 'ratingsBarGradient'];
  }

  return (
    <BarContainer>
      <LabelText>{props.name}</LabelText>
      <BarSegmentSolid width={barWidth} className={classNames[0]}></BarSegmentSolid>
      <PercentText>{props.percent}</PercentText>
      <BarSegmentGradient className={classNames[1]}></BarSegmentGradient>
    </BarContainer>
  );

};

export default RatingBar;
