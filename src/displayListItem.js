import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

console.log("displayListItem loaded");

const DisplayListItem = (props) => {



var textDisplay = <span>{props.item.text}</span>

var textEditButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleEditStatus(e, props.index)}>
      <button type="submit">Text Edit</button>
    </div>

var textDisplayButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleEditStatus(e, props.index)}>
      <button type="submit">Text Display</button>
    </div>
var deleteButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleDelete(e, props.index)}>
      <button type="submit">Delete This</button>
    </div>


  return (<div>

    <div className="Dynamic-Elements-Container">
      {
        props.item.edit === false
        ? <div>{props.item.text} {textEditButton}</div>
        : <div><input value= {props.item.text} type= "text" onChange = {(e)=> props.handleeditChange(e, props.index)}/> {deleteButton} {textDisplayButton}</div>
      }
      {/*
        <div style={{display: props.selectedButton === 'Text Display' ? 'block': 'none'}}>{textDisplay}</div>
        <div style={{display: props.selectedButton === 'Text Edit' ? 'block': 'none'}}>Edit this</div>
        */}
    </div>
    <div>{props.item.priority > 1 && <button onClick={props.prioritiseThis} type="submit">Increase Priority</button>}
    </div>
  </div>)
};

DisplayListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default DisplayListItem;

    //
