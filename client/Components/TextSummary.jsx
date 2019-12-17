import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import colors from './Colors.jsx';

const Textbox = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
  margin-left: 12px;
  width: 175px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const TextWrapper = styled.div`
  position: relative;
`;

const MinimizedText = styled.div`
  font-family: "DINPro-Light";
  font-size: 13px;
  margin: 0px;
  height: 60px;
  line-height: 19px;
  overflow-y: hidden;
  margin-bottom: 0px;
`;

const MaximizedText = styled.div`
  font-family: "DINPro-Light";
  font-size: 13px;
  margin: 0px;
  min-height: 60px;
  line-height: 19px;
  margin-bottom: 0px;
`;

const QuoteMark = styled.div`
  position: absolute;
  font-size: 13px;
  top: 0px;
  left: -6px;
  margin: 0px;
  height: 60px;
  line-height: 19px;
  margin-bottom: 0px;
`;

const ReadMoreLessButton = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
  margin: 0px;
  cursor: pointer;
`;

const DataSourceName = styled.div`
  font-size: 12px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const TextboxTail = styled.div`
  width: 0;
  height: 0;
  margin-left: 12px;
  border-style: solid;
  border-width: 0 15px 20px 24px;
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
        <MaximizedText>{`${this.props.summary}"`}</MaximizedText>
      </TextWrapper>);
    }
  }

  render() {

    return (
      <div>
        <Textbox className="textboxBackground">
          <Title>{this.props.name}</Title>
          {this.renderView()}
          <ReadMoreLessButton onClick={this.onReadClick} className="darkRedOrGreenGlobalColor">{this.state.readOptionClickText}</ReadMoreLessButton>
          <DataSourceName className="textDarkGrayGlobalColor">MorningStar</DataSourceName>
        </Textbox>
        <TextboxTail className="textboxTail"></TextboxTail>
      </div>
    );
  }

}

export default TextSummary;