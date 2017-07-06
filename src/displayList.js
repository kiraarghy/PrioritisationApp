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

  var increaseCount = () => {
    console.log("oranges")
  }

  var thisthing = (item) => {
    return () =>
    console.log(item);
  }
//so we need to put in the return ()=> in the f(thisthing) as this declares the function console.log
//if we do not declare and simply exexcute console.log when this thing is executed by the onCLick handler
//it will execute everytime the onClick handler is called regardles of context.
//tl:dr put the thing you wanna call in two levels deep to stop it from executing and causing your stuff to mess up.
//cool huh?
  return (
    <div className="Box">
      <div>
        {props.items.map((item, index) => {
          return <div key = {index}>{item.text}
            <button id={item.count} onClick={thisthing(item)} type="submit">Increase Priority</button>
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
