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
  left: 27px;
  top: 53px;
  width: 90px;
  height: 20px;
  line-height: 0px;
  color: ${(props) => props.color};
  text-align: center;
  font-size: 21pt;
  font-weight: 500;
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
const PriceTagIcon = styled.img`
  position: relative;
  src: ${(props) => props.src};
  height: 15px;
  width: 15px;
  top: 66px;
  left: 22px;
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
    <div>
      <PriceTagIcon src={colors[2]}></PriceTagIcon>
      <CircleStyle color={colors[1]}>
        <CircleMainTextStyle color={colors[0]}>{props.percent}</CircleMainTextStyle>
        <CircleMinorTextStyle color={colors[0]}> of {props.totalRatings} ratings</CircleMinorTextStyle>
      </CircleStyle>
    </div>
  );

};

export default CircleSummary;