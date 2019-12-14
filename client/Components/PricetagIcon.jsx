import React from 'react';
import styled from 'styled-components';

const Stylesvg = styled.svg`
  position: absolute;
  top: 41px;
  left: 10px;
  z-index: 1;
`;

const Styleg = styled.g`
  fillRule: evenodd;
  transform: translate(-4 -4);
`;

const Stylepath = styled.path`
  fill: ${(props) => props.color};
  d: path("M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4");
`;

const PricetagIcon = (props) => {

  return (
    <Stylesvg viewBox="0 0 25 25" width="20" height="20">
      <Styleg>
        <Stylepath className="darkRedOrGreenGlobalColor"></Stylepath>
      </Styleg>
    </Stylesvg>

  );
};

export default PricetagIcon;

