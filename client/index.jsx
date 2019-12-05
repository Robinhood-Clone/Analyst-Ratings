import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analystRatings: [],
    }

    this.getAnalystRatings = this.getAnalystRatings.bind(this);
  }

  getAnalystRatings (stockTicker) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState(
          {analystRatings: data}
        )
        console.log('Get request successful: ', data);
      }
    })
  }

  render () {
    return (
      <div>{this.state.analystRatings}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));