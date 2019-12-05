import React from 'react';

const CircleSummary = (props) => {

  return (
    <div>
      <div className="circle">
        <div className="circle-main-text">{props.percent}</div>
        <div> of {props.totalRatings} ratings</div>
      </div>
    </div>
  );

};

export default CircleSummary;