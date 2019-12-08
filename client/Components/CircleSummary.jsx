import React from 'react';
import styled from 'styled-components';
import PricetagIcon from './PricetagIcon.jsx';

const CircleContainer = styled.div`
  display: flex;
  width: 128px;
`;

const CircleStyle = styled.div`
  position: relative;
  background: ${(props) => props.color};
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const CircleMainTextStyle = styled.div`
  position: relative;
  left: 27px;
  top: 53px;
  width: 90px;
  height: 20px;
  line-height: 0px;
  color: ${(props) => props.color};
  text-align: center;
  font-size: 21pt;
  font-weight: 600;
`;

const CircleMinorTextStyle = styled.div`
  position: relative;
  left: 19px;
  top: 60px;
  width: 90px;
  height: 40px;
  line-height: 0px;
  font-weight: 600pt;
  color: ${(props) => props.color};
  text-align: center;
`;

const CircleSummary = (props) => {
  let colors;
  let darkRed = 'rgb(244, 85, 49)';
  let lightRed = 'rgb(255, 245, 243)';
  let darkGreen = 'rgb(33, 206, 153)';
  let lightGreen = 'rgb(230, 249, 243)';

  if (props.percent.substring(0, props.percent.length - 1) < 50) {
    colors = [darkRed, lightRed, './label-red.png'];
  } else {
    colors = [darkGreen, lightGreen, './label-green.png'];
  }

  return (
    <CircleContainer>
      <PricetagIcon color={colors[0]}></PricetagIcon>
      <CircleStyle color={colors[1]}>
        <CircleMainTextStyle color={colors[0]}>{props.percent}</CircleMainTextStyle>
        <CircleMinorTextStyle color={colors[0]}> of {props.totalRatings} ratings</CircleMinorTextStyle>
      </CircleStyle>
    </CircleContainer>
  );

};

export default CircleSummary;