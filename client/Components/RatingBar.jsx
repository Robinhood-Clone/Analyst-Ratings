import React from 'react';
import styled from 'styled-components';

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
  let darkRed = 'rgb(244, 85, 49)';
  let lightRed = 'rgb(255, 245, 243)';
  let darkGreen = 'rgb(33, 206, 153)';
  let lightGreen = 'rgb(230, 249, 243)';
  let gray = 'rgb(244, 244, 245)';

  let colors;
  if (props.name === 'Buy') {
    if (percentNum < 50) {
      colors = [darkRed, lightRed];
    } else {
      colors = [darkGreen, lightGreen];
    }
  } else {
    colors = ['black', gray];
  }

  return (
    <BarContainer>
      <LabelText>{props.name}</LabelText>
      <BarSegmentSolid barWidth={barWidth} color={colors[0]}></BarSegmentSolid>
      <PercentText>{props.percent}</PercentText>
      <BarSegmentGradient color={colors[1]}></BarSegmentGradient>
    </BarContainer>
  );

};

export default RatingBar;
