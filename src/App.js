import React, { Component } from "react";
import "./App.css";
import DisplayList from "./displayList.js";
import List from "./list.js";
import "react-dates/lib/css/_datepicker.css";

class App extends Component {
  //On refresh, the app pulls the items from localStorage and pushes to state. A number of other defaults are written here.

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Display List",
      items: JSON.parse(localStorage.getItem("items")) || [],
      query: "",
      date: "",
      dateCreated: "",
      focusedInput: ""
    };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDisplay = this.onDisplay.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditStatus = this.handleEditStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditDate = this.handleEditDate.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  //addItem triggered within list.js by form onSubmit. Simple data verification to ensure not empty, though this needs proper data
  //verification at a later date [regex]

  //This function adds to array itemArray text: from list.js input, edit [used in displayListItem], date is default 00/00/00
  //this can be edited at a later date by the user, color is set to white by default intention is to write a function which compares today's date
  //to that of date and will change color, date created is created from today.

  //addItem then writes the array itemArray to this.state.items

  addItem(e) {
    e.preventDefault();

    var itemArray = this.state.items;

    if (this.state.query === "") {
      alert("Please enter an item");
    } else {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      var todays = dd + "/" + mm + "/" + yyyy;

      itemArray.push({
        text: this.state.query,
        edit: false,
        endingDate: "",
        startingDate: "",
        color: "white",
        dateCreated: todays
      });

      this.setState({
        items: itemArray,
        query: ""
      });

      localStorage.setItem("items", JSON.stringify(itemArray));
    }
  }

  onDatesChange(startDate, endDate) {
    this.setState({ startDate, endDate });
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
    console.log(this.state.query);
  }

  handleReset() {
    alert("handleReset triggered");
  }

  handleDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  handleEditChange(e, index) {
    let items = this.state.items;

    if (e.target.value === "") {
      alert("Please do not enter empty values");
    }

    items[index] = Object.assign({}, items[index], { text: e.target.value });
    this.setState({
      items
    });

    localStorage.setItem("items", JSON.stringify(items));
  }

  handleEditDate(e, index) {
    let items = this.state.items;
console.log(e.target.value)
    items[index] = Object.assign({}, items[index], {
      startingDate: e.target.value
    });

    this.setState({
      items
    });

    localStorage.setItem("items", JSON.stringify(items));
  }

  handleEditStatus(e, index) {
    let items = this.state.items;
    items[index] = Object.assign({}, items[index], {
      edit: !items[index].edit
    });

    this.setState({
      items
    });

    localStorage.setItem("items", JSON.stringify(items));
  }

  handleDelete(e, index) {
    this.state.items.splice(index, 1);

    this.setState({
      items: this.state.items
    });

    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  onDisplay(editOrText) {
    this.setState({
      selectedButton: editOrText
    });
  }

  render() {
    var onClickGenerator = Tab => {
      return () => {
        this.setState({ selectedTab: Tab });
      };
    };

    return (
      <div className="App">
        <div className="App-header">
          <div className="container-buttons">
            <div
              className="Interactive-buttonleft"
              onClick={onClickGenerator("Text Input")}
            >
              <h1 className="Cool-Styling">Input</h1>
            </div>
            <div
              className="Interactive-buttonleft"
              onClick={onClickGenerator("Display List")}
            >
              <h1 className="Cool-Styling">List</h1>
            </div>
          </div>
          <div className="Dynamic-Elements-Container">
            <div
              style={{
                display:
                  this.state.selectedTab === "Text Input" ? "block" : "none"
              }}
            >
              <List
                handleChange={this.handleChange}
                handleDate={this.handleDate}
                addItem={this.addItem}
                returnToTab={() =>
                  this.setState({ selectedTab: "Display List" })}
              />
              <DisplayList
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEditStatus={this.handleEditStatus}
                handleEditChange={this.handleEditChange}
                handleEditDate={this.handleEditDate}
                selectedButton={this.state.selectedButton}
                onDisplay={this.onDisplay}
                swapArray={this.swapIndices}
                query={this.state.query}
                handleReset={this.handleReset}
              />
            </div>
            <div
              style={{
                display:
                  this.state.selectedTab === "Display List" ? "block" : "none"
              }}
            >
              <DisplayList
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEditStatus={this.handleEditStatus}
                handleEditChange={this.handleEditChange}
                handleEditDate={this.handleEditDate}
                selectedButton={this.state.selectedButton}
                onDisplay={this.onDisplay}
                swapArray={this.swapIndices}
                query={this.state.query}
                handleReset={this.handleReset}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
