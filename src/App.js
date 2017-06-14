import React, { Component } from 'react';
import './App.css';
import DisplayList from './displayList.js';
import List from './list.js';


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedTab: null,
        items: [],
        query:""
      };

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



  render() {

    var onClickGenerator = (Tab) => {
      return () => {this.setState({selectedTab: Tab})}
    }

    var ArraySort = () => {
        var sortItems = this.state.items;
        sortItems.sort(function(a,b) {return (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0); });
        this.setState({
          items: sortItems
        });
    }


    return (
      <div className="App">
        <div className="App-header">
          <div className ="container-buttons">
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Text Input')}>
              <h1 className ="Cool-Styling">Input</h1>
            </div>
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Display List')}>
              <h1 className ="Cool-Styling">List</h1>
            </div>
            <div className="Interactive-buttonleft" onClick={ArraySort}>
              <h1 className ="Cool-Styling">Sort</h1>
            </div>
          </div>
          <div className="Dynamic-Elements-Container">
            <div style={{display: this.state.selectedTab === 'Text Input' ? 'block': 'none'}}><List handleChange= {this.handleChange} addItem = {this.addItem}/></div>
            <div style={{display: this.state.selectedTab === 'Display List' ? 'block': 'none'}}><DisplayList items= {this.state.items}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
