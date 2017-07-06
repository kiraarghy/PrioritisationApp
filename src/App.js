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
          key: Date.now(),
          count: this.state.items.length +1
      }
    );

    this.setState({
      items: itemArray
    });

    console.log(this.state.items);
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

    // var countSort = () => {
    //     var sortItems = this.state.items;
    //     sortItems.sort(function(a,b) {return (a.count > b.count) ? 1 : ((b.count > a.count) ? -1 : 0); });
    //     this.setState({
    //       items: sortItems
    //     });
    // }

    // var increaseCount = (a) => {
    //   var increasedCount = this.state.items;
    //   console.log(this.state.items.count[a]);
    // }
// //not gonna work because adding plus 1 to i will just cause it to become that?
//     var Increase = () => {
//       var increaseCount = this.state.items;
//       console.log(items);
//       return () => {this.setState({ count: this.state.items.count[i-1] +5})}
//       console.log(items);
//     }


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
