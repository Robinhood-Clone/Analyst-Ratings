import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import CircleSummary from './CircleSummary.jsx';
import RatingBars from './RatingBars.jsx';
import TextSummaries from './TextSummaries.jsx';
import GlobalStyle from './GlobalStyle.jsx';
import styled from 'styled-components';

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
      currentStockTicker: 'PSX', // AHPAW is green and UVE is red
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
    let x = location.pathname;
    let stockTicker = x.substring(8, x.length - 1); // 8 is the length of string '/stocks/'
    this.getAnalystRatings(stockTicker);
  }

  getAnalystRatings(stockTicker, callback) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4000/api/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState({
          currentStockTicker: stockTicker,
          details: data[0]
        });
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
