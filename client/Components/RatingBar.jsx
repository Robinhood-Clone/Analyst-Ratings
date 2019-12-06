import React from 'react';
import styled from 'styled-components';

const BarContainerStyle = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-left: 15px;
  margin-bottom: 20px;
  width: 460px;
`;

const BarSegmentSolidStyle = styled.div`
  display: flex;
  width: ${(props) => props.barWidth}px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${(props) => props.color};
  height: 6px;
`;

const BarSegmentGradientStyle = styled.div`
  display: flex;
  flex-grow: 1;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-image: linear-gradient(.25turn, white, 2%, ${(props) => props.color});
  height: 6px;
`;

const TextStyle = styled.div`
  font-weight: 500;
  width: 35px;
`;

const PercentTextStyle = styled.div`
  font-weight: 500;
  margin-left: 3px;
  margin-right: 5px;
`;

const RatingBar = (props) => {
  let percentNum = props.percent.substring(0, props.percent.length - 1);
  let barWidth = percentNum / 100 * 460;
  let darkRed = 'rgb(245, 85, 49)';
  let lightRed = '#ffcccb';
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
    <BarContainerStyle>
      <TextStyle>{props.name}</TextStyle>
      <BarSegmentSolidStyle barWidth={barWidth} color={colors[0]}></BarSegmentSolidStyle>
      <PercentTextStyle>{props.percent}</PercentTextStyle>
      <BarSegmentGradientStyle color={colors[1]}></BarSegmentGradientStyle>
    </BarContainerStyle>
  );

};

export default RatingBar;
