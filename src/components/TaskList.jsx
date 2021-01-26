import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import { filterTable } from "../actions";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    const filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? +value : +this.state.filterStatus,
    };
    this.props.onFIlterTable(filter);
    this.setState({
      [name]: value,
    });
  };
  render() {
    var { tasks, FilterTable,keyword } = this.props;
    var { filterName, filterStatus } = this.state;
    //search 
    tasks = tasks.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    });
    // filter on table
    if (FilterTable.name) {
      tasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(FilterTable.name.toLowerCase()) !== -1
        );
      });
    }

    tasks = tasks.filter((task) => {
      if (FilterTable.status === -1) {
        return task;
      } else {
        return task.status === (FilterTable.status === 1 ? true : false);
      }
    });

    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    FilterTable: state.FilterTable,
    keyword: state.SearchTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFIlterTable: (filter) => {
      dispatch(filterTable(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
