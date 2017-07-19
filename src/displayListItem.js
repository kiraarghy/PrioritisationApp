import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

console.log("displayListItem loaded");

const DisplayListItem = (props) => {

var ondisplay = (editOrText) => {
   return () => {this.setState({selectedButton: editOrText})}
}

var textDisplay = <span>{props.item.text}</span>


  return (<div>
    <div className="Dynamic-Elements-Container">
      <div style={{display: this.state.selectedButton === 'Text Display' ? 'block': 'none'}}>Edit this</div>
      <div style={{display: this.state.selectedButton === 'Text Edit' ? 'block': 'none'}}>{textDisplay}</div>
    </div>
    <div>{props.item.priority > 1 && <button onClick={props.prioritiseThis} type="submit">Increase Priority</button>}
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

    //
