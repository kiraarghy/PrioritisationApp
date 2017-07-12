import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

//look at prop-types
//items:PropTypes.array

// var increaseCount = (e) => {
//   alert('it works!');
//   e.preventDefault();
// }
  // var increasedCount = this.state.items;
  // console.log(item);

const DisplayList = (props) => {

  const sortedItems = props.items.map((item, i) => {
    const x = item
    x.id = i
    return (x);
  }).sort(function(a,b) {return (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1: 0);})

  var increaseCount = () => {
    console.log("oranges")
  }

  var thisthing = (item, item2) => {
    return () =>
    props.onPrioritise(item.id, item2.id);
  }
//so we need to put in the return ()=> in the f(thisthing) as this declares the function console.log
//if we do not declare and simply exexcute console.log when this thing is executed by the onCLick handler
//it will execute everytime the onClick handler is called regardles of context.
//tl:dr put the thing you wanna call in two levels deep to stop it from executing and causing your stuff to mess up.
//cool huh?
  return (
    <div className="Box">
      <div>
        {sortedItems.map((item, index) => {
          return <div key = {index}>{item.text}
            {item.priority > 1 && <button onClick={thisthing(item, sortedItems[index-1])} type="submit">Increase Priority</button>}
          </div>})
        }
      </div>
  </div>
  );
}

// nSubmit={this.props.increaseCount()}

DisplayList.propTypes ={
  items:PropTypes.array.isRequired
}

export default DisplayList;
