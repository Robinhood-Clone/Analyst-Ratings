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
      <PricetagIcon className="darkRedOrGreenGlobalColor"></PricetagIcon>
      <CircleStyle className="lightRedOrGreenGlobalColor">
        <CircleMainTextStyle className="darkRedOrGreenGlobalColor">{props.percent}</CircleMainTextStyle>
        <CircleMinorTextStyle className="darkRedOrGreenGlobalColor"> of {props.totalRatings} ratings</CircleMinorTextStyle>
      </CircleStyle>
    </CircleContainer>
  );

};

export default CircleSummary;