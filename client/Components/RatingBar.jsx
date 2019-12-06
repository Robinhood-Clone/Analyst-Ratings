import React from 'react';

const RatingBar = (props) => {

  return (
    <div>
      <span>{props.name}  </span>
      <span>xxxxxxxx</span>
      <span>  {props.percent}  </span>
      <span>xxxxxxxxxxxxxx</span>
    </div>
  );

};

export default RatingBar;