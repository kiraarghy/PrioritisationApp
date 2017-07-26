import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import DisplayListItem from "./displayListItem.js";


//look at prop-types
//items:PropTypes.array

// var increaseCount = (e) => {
//   alert('it works!');
//   e.preventDefault();
// }
  // var increasedCount = this.state.items;
  // console.log(item);

//start thinking about structuring code, e.g. here we've separated out stuff refering to list from stuff referring to item

const DisplayList = (props) => {

  const sortedItems = props.items.map((item, i) => {
    const x = item
    x.id = i
    return (x);
  }).sort(function(a,b) {return (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1: 0);});

  var prioritiseThis = (item, item2) => {
    return () =>
    props.onPrioritise(item.id, item2.id);
  };

  var editThis = (item) => {
    return () => console.log(item);
  };

  var renderedSortedItems = sortedItems.map(
    (item, index) => {
      return <DisplayListItem
        index={index}
        handleEditStatus= {props.handleEditStatus}
        handleDelete= {props.handleDelete}
        item={item} onDisplay={props.onDisplay}
        handleeditChange= {props.handleeditChange}
        selectedButton={props.selectedButton}
        prioritiseThis={prioritiseThis(item, sortedItems[index-1])}
        editThis={editThis}
        key={index}/>;
    }
  );

  return (
    <div className="Box">
      <div>
        {renderedSortedItems}
      </div>
  </div>
  );
};

DisplayList.propTypes = {
  items: PropTypes.array.isRequired
}

export default DisplayList;
