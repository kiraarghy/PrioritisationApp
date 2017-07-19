import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

console.log("displayListItem loaded");

const DisplayListItem = (props) => {

  return (<div>
    <div>{props.item.text}{props.item.priority > 1 && <button onClick={props.prioritiseThis} type="submit">Increase Priority</button>}
    </div>
    <div>
      <button onClick={props.editThis(props.item)} type="submit">Edit this entry</button>
    </div>
  </div>)
};

DisplayListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default DisplayListItem;
