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
  width: ${(props) => props.barWidth}px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${(props) => props.color};
  height: 6px;
`;

const BarSegmentGradient = styled.div`
  display: flex;
  flex-grow: 1;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-image: linear-gradient(.25turn, white, 2%, ${(props) => props.color});
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

  let colorsArr;
  if (props.name === 'Buy') {
    if (percentNum < 50) {
      colorsArr = [colors.darkRed, colors.lightRed];
    } else {
      colorsArr = [colors.darkGreen, colors.lightGreen];
    }
  } else {
    colorsArr = ['black', colors.gray];
  }

  return (
    <BarContainer>
      <LabelText>{props.name}</LabelText>
      <BarSegmentSolid barWidth={barWidth} color={colorsArr[0]}></BarSegmentSolid>
      <PercentText>{props.percent}</PercentText>
      <BarSegmentGradient color={colorsArr[1]}></BarSegmentGradient>
    </BarContainer>
  );

};

export default RatingBar;
