import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

class DisplayListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  render() {
    var textEditButton = (
      <div
        className="Interactive-buttonleft"
        onClick={e => this.props.handleEditStatus(e, this.props.index)}
      >
        <button type="submit">Edit Task</button>
      </div>
    );

    <div
      className="Interactive-buttonleft"
      onClick={e => this.props.handleEditStatus(e, this.props.index)}
    >
      <button type="submit">Finish Edit</button>
    </div>;

    var deleteButton = (
      <div
        className="Interactive-buttonleft"
        onClick={e => this.props.handleDelete(e, this.props.index)}
      >
        <button type="submit">Delete This Task</button>
      </div>
    );

    var textDisplayButton = (
      <div
        className="Interactive-buttonleft"
        onClick={e => this.props.handleEditStatus(e, this.props.index)}
      >
        <button type="submit">Finish Edit</button>
      </div>
    );

    var dateColor = {
      backgroundColor: this.props.item.color
    };

    return (
      <div>
        <div className="Dynamic-Elements-Container">
          {this.props.item.edit === false
            ? <div>
                <div style={dateColor}>
                  Title of task: {this.props.item.text}
                </div>
                {this.props.item.date !== "00/00/00"
                  ? <div>
                      Completion date for task: {this.props.item.date}
                    </div>
                  : ""}
                <div>
                  Date task created on: {this.props.item.dateCreated}
                </div>{" "}
                {textEditButton}{" "}
              </div>
            : <div>
                <div>
                  Change task title here:{" "}
                  <input
                    value={this.props.item.text}
                    type="text"
                    onChange={e =>
                      this.props.handleEditChange(e, this.props.index)}
                  />
                </div>
                <div>
                  Change completion date here:<input
                    value={this.state.startDate}
                    onChange={e =>
                      this.props.handleEditDate(e, this.props.index)}
                  />
                </div>
                <div>
                  {deleteButton}
                  <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput =>
                      this.setState({ focusedInput })} // PropTypes.func.isRequired,
                  />
                  {textDisplayButton}
                </div>
              </div>}
        </div>
        <div>
          {this.props.index > 0 &&
            <button onClick={this.props.prioritiseThis} type="submit">
              Increase Priority
            </button>}
        </div>
      </div>
    );
  }
}

DisplayListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default DisplayListItem;
