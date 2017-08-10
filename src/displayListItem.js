import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

console.log("displayListItem loaded");

const DisplayListItem = (props) => {

var textEditButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleEditStatus(e, props.index)}>
      <button type="submit">Edit Task</button>
    </div>

var textDisplayButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleEditStatus(e, props.index)}>
      <button type="submit">Finish Edit</button>
    </div>

var deleteButton = <div className="Interactive-buttonleft"
      onClick={(e) => props.handleDelete(e, props.index)}>
      <button type="submit">Delete This Task</button>
    </div>

var dateColor = {
    backgroundColor: props.item.color
}

  return (<div>

    <div className="Dynamic-Elements-Container">
      {
        props.item.edit === false
        ? <div>
            <div style= {dateColor}>Title of task: {props.item.text}</div>
            {props.item.date !== "00/00/00" ? <div>Completion date for task: {props.item.date}</div> : ""}
            <div>Date task created on: {props.item.dateCreated}</div> {textEditButton} </div>
        : <div>
            <div>Change task title here: <input value= {props.item.text} type= "text" onChange = {(e)=> props.handleEditChange(e, props.index)}/></div>
            <div>Change completion date here:<input value= {props.item.date} type= "text" onChange = {(e)=> props.handleEditDate(e, props.index)}/></div>
            <div>
              {deleteButton}
              {textDisplayButton}
            </div>
      </div>
      }
    </div>
    <div>{props.index > 0 && <button onClick={props.prioritiseThis} type="submit">Increase Priority</button>}
    </div>
  </div>)
};

DisplayListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default DisplayListItem;
