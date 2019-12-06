import React from 'react';

class TextSummary extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      summaryDisplayed: this.props.summary,
      buttonDisplayed: 'Read More'
    };
  }


  render() {
    return (
      <div className="text-summary">
        <div>{this.props.name}</div>
        <div>{this.state.summaryDisplayed}</div>
        <button>{this.state.buttonDisplayed}</button>
      </div>
    );
  }

}

export default TextSummary;