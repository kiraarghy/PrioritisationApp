import React, { Component } from 'react';
import './App.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.formSubmit = this.formSubmit.bind(this);
  }

  var App = React.createClass({
      getInitialState: = () =>
        return {
          name: '',
          businesses: [
            {
              id: bonheimPharma,
              turnover: 20000
            },
            {
              id: darstadlyPharma,
              turnover: 30000
            }
          ]
        });
  }
    render() {
      return (
          <form onSubmit={this.formSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
    }


}

export default Form;
