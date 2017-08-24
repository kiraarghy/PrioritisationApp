import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


class List extends Component {

constructor(props) {
    super(props);
this.handleClick = this.handleClick.bind(this);
}

//handleClick resets the input form, and resets the displayed tab to display list

handleClick () {
  this.props.returnToTab();
 this.form.value="";
}

//Form is linked to handleChange, updates the query variable. onSubmit this pushes the query to state as a new item object.

//Button triggers onSubmit and onClick triggers handleClick

//All the data verification occurs in App.js

  render () {
    return (
      <div className="Box">
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input ref={(a) => this.form = a}
                onChange = {this.props.handleChange}
                placeholder="enter task">
              </input>
              <button type="submit" onClick={this.handleClick}>add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  addItem:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired
}

export default List;
