import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class List extends Component {

constructor(props) {
    super(props);
this.handleClick = this.handleClick.bind(this);
}

handleClick () {
  this.props.returnToTab();  
 this.form.value="";

}

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
