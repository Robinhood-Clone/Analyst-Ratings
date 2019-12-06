import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import CircleSummary from './CircleSummary.jsx';
import RatingBars from './RatingBars.jsx';
import TextSummaries from './TextSummaries.jsx';

class AnalystRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      analystRatings: [],
      percent: '56%',
      totalRatings: 43,
      placeholder: [{name:'Buy', percent:'10%'}, {name:'Hold', percent:'20%'}, {name:'Sell', percent:'30%'}],
      placeholderTextSummary: [{name:'BuySummary', summary:'Lorem ipsum'}, {name:'HoldSummary', summary:'Lorem ipsum etc'}]
    };
  }

  getAnalystRatings = (stockTicker, callback) => {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState(
          { analystRatings: data }
        );
        console.log('Get request successful: ', data);
      }
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <CircleSummary percent={this.state.percent} totalRatings={this.state.totalRatings}></CircleSummary>
        <RatingBars options={this.state.placeholder}></RatingBars>
        <TextSummaries options={this.state.placeholderTextSummary}></TextSummaries>
      </div>
    );
  }
}

export default AnalystRatings;