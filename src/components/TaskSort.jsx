import React, { Component } from "react";
import { connect } from "react-redux";
import {  sortTask } from "../actions";

class TaskSort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({
        by : sortBy,
        value : sortValue
    });
}
  render() {
    const { sortTask } = this.props;
    // console.log(sortTask);
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClick("name", 1)}>
              <a role="button">
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                  <i
                    className={
                      sortTask.by === "name" && sortTask.value === 1
                        ? "fas fa-check float-right"
                        : ""
                    }
                  />
                </span>
              </a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                  <i
                    className={
                      sortTask.by === "name" && sortTask.value === -1
                        ? "fas fa-check float-right"
                        : ""
                    }
                  />
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={() => this.onClick("status", 1)}>
              <a role="button">
                Trạng Thái Kích Hoạt
                <i
                  className={
                    sortTask.by === "status" && sortTask.value === 1
                      ? "fas fa-check float-right"
                      : ""
                  }
                />
              </a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a role="button">
                Trạng Thái Ẩn
                <i
                  className={
                    sortTask.by === "status" && sortTask.value === -1
                      ? "fas fa-check float-right"
                      : ""
                  }
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sortTask: state.SortTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(sortTask(sort));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
