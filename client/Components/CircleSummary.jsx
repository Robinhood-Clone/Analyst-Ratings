import React from 'react';
import styled from 'styled-components';

const CircleStyle = styled.div`
  background: ${(props) => props.color};
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const CircleMainTextStyle = styled.div`
  position: relative;
  left: 19px;
  top: 50px;
  width: 90px;
  height: 20px;
  line-height: 0px;
  color: ${(props) => props.color};
  text-align: center;
  font-size: 22px;
`;

const CircleMinorTextStyle = styled.div`
  position: relative;
  left: 19px;
  top: 60px;
  width: 90px;
  height: 40px;
  line-height: 0px;
  color: ${(props) => props.color};
  text-align: center;
`;


const CircleSummary = (props) => {
  let colors;
  let darkRed = 'rgb(245, 85, 49)';
  let lightRed = '#ffcccb';
  let darkGreen = 'rgb(33, 206, 153)';
  let lightGreen = 'rgb(230, 249, 243)';

  if (props.percent.substring(0, props.percent.length - 1) < 50) {
    colors = [darkRed, lightRed];
  } else {
    colors = [darkGreen, lightGreen];
  }

  return (
    <div>
      <CircleStyle color={colors[1]}>
        <CircleMainTextStyle color={colors[0]}>{props.percent}</CircleMainTextStyle>
        <CircleMinorTextStyle color={colors[0]}> of {props.totalRatings} ratings</CircleMinorTextStyle>
      </CircleStyle>
    </div>
  );

};

export default CircleSummary;