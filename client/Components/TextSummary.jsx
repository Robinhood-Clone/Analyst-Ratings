import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Textbox = styled.div`
  background: rgb(247, 247, 247);
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
  margin-left: 12px;
  width: 175px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const TextWrapper = styled.div`
  position: relative;
`;

const MinimizedText = styled.div`
  margin: 0px;
  height: 60px;
  line-height: 19px;
  overflow-y: hidden;
  margin-bottom: 0px;
`;

const MaximizedText = styled.div`
  margin: 0px;
  min-height: 60px;
  line-height: 19px;
  margin-bottom: 0px;
`;

const QuoteMark = styled.div`
  position: absolute;
  top: 0px;
  left: -6px;
  margin: 0px;
  height: 60px;
  line-height: 19px;
  margin-bottom: 0px;
`;

const ReadMoreLessButton = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: ${(props) => props.color};
  margin-top: 5px;
  margin: 0px;
  cursor: pointer;
`;

const DataSourceName = styled.div`
  font-size: 12px;
  color: rgb(213, 213, 216);
  padding-top: 15px;
  padding-bottom: 22px;
`;

const TextboxTail = styled.div`
  width: 0;
  height: 0;
  margin-left: 12px;
  border-style: solid;
  border-width: 0 15px 20px 24px;
  border-color: transparent transparent transparent rgb(247, 247, 247);
`;


class TextSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      summaryDisplayed: this.props.summary,
      readOptionClickText: 'Read More'
    };

    this.onReadClick = this.onReadClick.bind(this);
  }

  onReadClick(event) {
    if (this.state.readOptionClickText === 'Read More') {
      this.setState({
        readOptionClickText: 'Read Less',
      });
    } else if (this.state.readOptionClickText === 'Read Less') {
      this.setState({
        readOptionClickText: 'Read More',
      });
    }
  }

  renderView() {
    if (this.state.readOptionClickText === 'Read More') {
      return (<TextWrapper>
        <QuoteMark>"</QuoteMark>
        <MinimizedText>{`${this.props.summary}"`}</MinimizedText>
      </TextWrapper>);
    } else if (this.state.readOptionClickText === 'Read Less') {
      return (<TextWrapper>
        <QuoteMark>"</QuoteMark>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          <MaximizedText>{`${this.props.summary}"`}</MaximizedText>
        </ReactCSSTransitionGroup>
      </TextWrapper>);
    }
  }

  render() {

    let color;
    let darkRed = 'rgb(244, 85, 49)';
    let darkGreen = 'rgb(33, 206, 153)';

    if (this.props.buyPercent.substring(0, this.props.buyPercent.length - 1) < 50) {
      color = darkRed;
    } else {
      color = darkGreen;
    }

    return (
      <div>
        <Textbox>
          <Title>{this.props.name}</Title>
          {this.renderView()}
          <ReadMoreLessButton onClick={this.onReadClick} color={color}>{this.state.readOptionClickText}</ReadMoreLessButton>
          <DataSourceName>MorningStar</DataSourceName>
        </Textbox>
        <TextboxTail></TextboxTail>
      </div>
    );
  }

}

export default TextSummary;