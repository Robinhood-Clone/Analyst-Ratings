import React from 'react';
import styled from 'styled-components';
import PricetagIcon from './PricetagIcon.jsx';
import colors from './Colors.jsx';

const CircleContainer = styled.div`
  display: flex;
  width: 128px;
  position: relative;
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
  let colorsArr;

  if (props.percent.substring(0, props.percent.length - 1) < 50) {
    colorsArr = [colors.darkRed, colors.lightRed, './label-red.png'];
  } else {
    colorsArr = [colors.darkGreen, colors.lightGreen, './label-green.png'];
  }

  return (
    <CircleContainer>
      <PricetagIcon color={colorsArr[0]}></PricetagIcon>
      <CircleStyle color={colorsArr[1]}>
        <CircleMainTextStyle color={colorsArr[0]}>{props.percent}</CircleMainTextStyle>
        <CircleMinorTextStyle color={colorsArr[0]}> of {props.totalRatings} ratings</CircleMinorTextStyle>
      </CircleStyle>
    </CircleContainer>
  );

};

export default CircleSummary;