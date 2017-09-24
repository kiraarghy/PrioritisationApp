import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import MaterialIcon from 'react-google-material-icons'

class DisplayListItem extends React.Component {
  render() {
    var textEditButton = (
      <span
        className="Interactive-buttonleft"
        onClick={e => this.props.handleEditStatus(e, this.props.index)}
        alt="edit here">
        <MaterialIcon icon="edit" size={20}/>
      </span>
    );

    <div
      className="Interactive-buttonleft"
      onClick={e => this.props.handleEditStatus(e, this.props.index)}
    >
      <button type="submit">Finish Edit</button>
    </div>;

    var deleteButton = (
      <span
        className="Interactive-buttonleft"
        onClick={e => this.props.handleDelete(e, this.props.index)}
      >
      <MaterialIcon icon="delete" size={20}/>
      </span>
    );

    var textDisplayButton = (
      <span
        className="Interactive-buttonleft"
        onClick={e => this.props.handleEditStatus(e, this.props.index)}
      >
      <MaterialIcon icon="done" size={20}/>
      </span>
    );

    var dateColor = {
      backgroundColor: this.props.item.color
    };

    return (
      <div className="displayContent-Container">
        <div >
          {this.props.item.edit === false ? (
            <div>
              <div className="displayContent-Header">Title of task: {this.props.item.text}</div>
              {this.props.item.endDate !== "00/00/00" ? (
                <div>Completion date for task: {this.props.item.endDate}</div>
              ) : (
                ""
              )}
              {this.props.item.startDate !== "00/00/00" ? (
                <div className='displayContent-Content'>Start date for task: {this.props.item.startDate}</div>
              ) : (
                ""
              )}
              <div className='displayContent-Content'>
                Date task created on: {this.props.item.dateCreated}
              </div>{" "}
              {textEditButton}{" "}
          {this.props.index > 0 && (
            <span onClick={this.props.prioritiseThis} alt="Increase Priority" type="submit">
            <MaterialIcon icon="publish" size={20}/>
            </span>
          )}
            </div>
            
          ) : (
            <div>
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
                  value={this.props.item.endDate}
                  onChange={e =>
                    this.props.handleEditEndDate(e, this.props.index)}
                />
              </div>
              <div>
                Change start date here:<input
                  value={this.props.item.startDate}
                  onChange={e =>
                    this.props.handleEditStartDate(e, this.props.index)}
                />
              </div>
              <div>
                {deleteButton}
                {textDisplayButton}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

DisplayListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default DisplayListItem;
