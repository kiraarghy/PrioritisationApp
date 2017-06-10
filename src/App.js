import React, { Component } from 'react';
import './App.css';
import DisplayList from './displayList.js';
import List from './list.js';


class App extends Component {

  constructor (props) {
    super (props);
    this.state = {items: [], query:""};

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    addItem (e) {
      e.preventDefault();

      var itemArray = this.state.items;

      console.log(e.target.value);

      itemArray.push (
        {
            text: this.state.query,
            key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      //this._inputElement.value = "";

    }

    handleChange (e) {
      this.setState({
        query: e.target.value
      })
    }
//so before we're passing props down to the component
  render() {
    return (
      <div>
        <List handleChange= {this.handleChange} addItem = {this.addItem}/>
        <DisplayList items= {this.state.items}/>
      </div>
    );
  }
}

export default App;
