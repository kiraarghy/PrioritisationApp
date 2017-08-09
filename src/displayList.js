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

class DisplayList extends React.Component {

  render() {

    var sortedItems = this.props.items.map((item, i) => {
      const x = item
      x.id = i
      return (x);
    }).sort(function(a,b) {return (a.index > b.index) ? 1 : ((b.index > a.index) ? -1: 0);});

    var prioritiseThis = (item, item2) => {
      return () =>
      this.props.onPrioritise(item.id, item2.id);
    };

    var editThis = (item) => {
      return () => console.log(item);
    };

    var swapArray = (array,index1,index2) => {
      return () => {
      console.log("Swap Indicies called")
      var temp = array[index2];
      array[index2] = array[index1];
      array[index1] = temp;

      let items = array;
      console.log("let items");

      this.setState({
        items: items
      })

      localStorage.setItem('items', JSON.stringify(items))
    }}

    var renderedSortedItems = sortedItems.map(
      (item, index) => {
        return <DisplayListItem
          index={index}
          handleEditStatus= {this.props.handleEditStatus}
          handleDelete= {this.props.handleDelete}
          item={item} onDisplay={this.props.onDisplay}
          handleEditChange= {this.props.handleEditChange}
          selectedButton={this.props.selectedButton}
          prioritiseThis={swapArray(this.props.items, index, index-1)}
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

}

DisplayList.propTypes = {
  items: PropTypes.array.isRequired
}

export default DisplayList;
