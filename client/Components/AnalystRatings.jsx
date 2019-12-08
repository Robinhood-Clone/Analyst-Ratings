import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import CircleSummary from './CircleSummary.jsx';
import RatingBars from './RatingBars.jsx';
import TextSummaries from './TextSummaries.jsx';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "DINPro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 19px;
    display: block;
  }
  @font-face {
    font-family: "DINPro";
    src: url("./DINPro.ttf") format('truetype');
  }

  h2 {
    font-size: 26px;
    font-weight: 900;
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

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-top: 0px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  padding-right: 20px;
  padding-left: 10px;
`;


class AnalystRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockTicker: 'AHPAW', // AHPAW is green and UVE is red
      details: {
        id: 0,
        ticker: 'ticker',
        companyName: 'name here',
        ratingCountBuys: 0,
        ratingCountHolds: 0,
        ratingCountSells: 0,
        sellSummary: 'sell because...',
        buySummary: 'buy because...',
      },
    };

    this.getAnalystRatings = this.getAnalystRatings.bind(this);
  }

  componentDidMount() {
    this.getAnalystRatings(this.state.currentStockTicker);
  }

  getAnalystRatings(stockTicker, callback) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4000/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState({ details: data[0] });
        console.log('Get request successful: ', data);
        console.log('State after get request: ', this.state);
      }
    });
  }

  render() {
    let totalRatings = this.state.details.ratingCountBuys + this.state.details.ratingCountHolds + this.state.details.ratingCountSells;
    let analystOpinionSummary = [
      { name: 'Buy', percent: `${Math.round(this.state.details.ratingCountBuys / totalRatings * 100)}%` },
      { name: 'Hold', percent: `${Math.round(this.state.details.ratingCountHolds / totalRatings * 100)}%` },
      { name: 'Sell', percent: `${Math.round(this.state.details.ratingCountSells / totalRatings * 100)}%` }
    ];

    let analystOpinionText = [
      { name: 'Buy Summary', summary: this.state.details.buySummary, buyPercent: `${Math.round(this.state.details.ratingCountBuys / totalRatings * 100)}%`},
      { name: 'Sell Summary', summary: this.state.details.sellSummary, buyPercent: `${Math.round(this.state.details.ratingCountBuys / totalRatings * 100)}%` }
    ];

    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <OuterContainer>
          <InnerContainer>
            <CircleSummary percent={analystOpinionSummary[0].percent} totalRatings={totalRatings}></CircleSummary>
          </InnerContainer>
          <InnerContainer>
            <RatingBars options={analystOpinionSummary}></RatingBars>
            <TextSummaries options={analystOpinionText}></TextSummaries>
          </InnerContainer>
        </OuterContainer>
      </div>
    );
  }
}

export default AnalystRatings;


// // I made this to see what the circle should display (highest percent opinion) but upon looking through the website, actually it just shows the Buy percent always... I think the below is more interesting so left it for now
// let percentArr = analystOpinionSummary.map((element) => element.percent);
// let largestPercent = Math.max(...percentArr);
// let opinionLargestPercent = analystOpinionSummary.find((element) => element.percent === largestPercent);
