import React, { Component } from "react";
import { connect } from "react-redux";
import { closeForm, deleteTask, updateStatus } from "../actions";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.deleteTask(this.props.task.id);
    this.props.onCloseForm();
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-primary" : "label label-success"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fa fa-pencil mr-5" />
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5" />
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(updateStatus(id));
    },
    deleteTask: (id) => {
      dispatch(deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
