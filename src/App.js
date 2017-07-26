import React, { Component } from 'react';
import './App.css';
import DisplayList from './displayList.js';
import List from './list.js';


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedTab: 'Text Input',
        items: JSON.parse(localStorage.getItem('items')) || [],
        query:""
      };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDisplay = this.onDisplay.bind(this);
    this.handleeditChange = this.handleeditChange.bind(this);
    this.handleEditStatus = this.handleEditStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addItem (e) {
    e.preventDefault();

    var itemArray = this.state.items;

    console.log(e.target.value);

    itemArray.push (
      {
          text: this.state.query,
          priority: this.state.items.length +1,
          edit: false
      }
    );

    this.setState({
      items: itemArray
    });

    console.log(this.state.items);
    //this._inputElement.value = "";

    localStorage.setItem('items', JSON.stringify(itemArray))

  }

  handleChange (e) {
    this.setState({
      query: e.target.value
    })
  }

  handleeditChange (e, index) {
    let items = this.state.items;
    items[index] = Object.assign({}, items[index], {text: e.target.value})

    this.setState({
      items
    })

    localStorage.setItem('items', JSON.stringify(items))
  }

  handleEditStatus (e, index) {
    let items = this.state.items;
    items[index] = Object.assign({}, items[index], {edit: !items[index].edit})

    this.setState({
      items
    })

    localStorage.setItem('items', JSON.stringify(items))
  }

  handleDelete (e, index) {
    this.state.items.splice(index, 1);

   this.setState({
     items: this.state.items
   })

   localStorage.setItem('items', JSON.stringify(this.state.items))
  }

  onDisplay (editOrText) {
    this.setState({
      selectedButton: editOrText
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

    var prioritySwap = (id1, id2) => {
        var prioritySwapped = this.state.items;
        var priority1 = prioritySwapped[id1].priority;
        var priority2 = prioritySwapped[id2].priority;
        prioritySwapped[id1].priority = priority2;
        prioritySwapped[id2].priority = priority1;
        this.setState({
          items: prioritySwapped
        })
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
            <div style={{display: this.state.selectedTab === 'Display List' ? 'block': 'none'}}>
              <DisplayList
                items= {this.state.items}
                handleDelete= {this.handleDelete}
                handleEditStatus={this.handleEditStatus}
                handleeditChange= {this.handleeditChange}
                selectedButton= {this.state.selectedButton}
                onDisplay= {this.onDisplay}
                onPrioritise= {prioritySwap}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
