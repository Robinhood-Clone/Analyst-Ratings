import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "DINPro-Medium";
  src: url("./DINPro-Medium tr.ttf") format('truetype');
}

@font-face {
  font-family: "DINPro-Light";
  src: url("./DINPro-Light tr.ttf") format('truetype');
}

body {
  font-family: "DINPro-Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 19px;
  display: block;
}

h2 {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  border-bottom: 1px solid #f4f4f5;
  padding-bottom: 16px;
}

`;

export default GlobalStyle;