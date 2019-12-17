import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import CircleSummary from './CircleSummary.jsx';
import RatingBars from './RatingBars.jsx';
import TextSummaries from './TextSummaries.jsx';
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
      currentStockTicker: 'MMM', // AHPAW is green and UVE is red
      details: {
        id: 0,
        ticker: 'MMM',
        companyName: '3M',
        ratingCountBuys: 29,
        ratingCountHolds: 25,
        ratingCountSells: 26,
        sellSummary: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        buySummary: 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      },
    };

    this.getAnalystRatings = this.getAnalystRatings.bind(this);
  }

  componentDidMount() {
    let path = location.pathname;
    let stockSymbol = path.substring(0, path.length - 1);
    if (stockSymbol === '' || stockSymbol === undefined) {
      stockSymbol = 'MMM';
    } else {
      stockSymbol = path.substring(8, path.length - 1);
    }

    this.getAnalystRatings(stockSymbol);
  }

  getAnalystRatings(stockTicker, callback) {
    $.ajax({
      method: 'GET',
      url: `http://3.136.112.156/api/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState({
          currentStockTicker: stockTicker,
          details: data[0]
        });
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
