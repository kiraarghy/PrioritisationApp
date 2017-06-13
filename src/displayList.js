import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

//look at prop-types
//items:PropTypes.array

const DisplayList = (props) => {
  return (
    <div className="Box">
      <div>
        {props.items.map((item, index) => {
          return <div key = {index}>{item.text}</div>})
        }
      </div>
  </div>
  );
}



DisplayList.propTypes ={
  items:PropTypes.array.isRequired
}

export default DisplayList;
