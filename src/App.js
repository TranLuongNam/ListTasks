import React, { Component } from "react";
import "./App.css";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import { toggleForm } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1,
      },
    };
  }

  onToggleForm = () => {
    this.props.onToggleForm();
  };

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    console.log(index);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };
  onFilter = (filterName, filterStatus) => {
    // console.log(filterName, filterStatus);.
    filterStatus = +filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onSort = async (by, value) => {
    await this.setState({
      sort: {
        by: by,
        value: value,
      },
    });
    console.log(this.state);
  };

  render() {
    var { taskEditing, filter, keyword, sort } = this.state;
    var { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return (task = task.name.toLowerCase().indexOf(filter.name) !== -1);
    //     });
    //   }
    //   // tasks = tasks.filter((task) => {
    //   //   if (filter.status === -1) {
    //   //     return task;
    //   //   } else {
    //   //     return task.status === (filter.status === 1 ? true : false);
    //   //   }
    //   // });
    // }
    // if (sort.by === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) {
    //       return sort.value;
    //     } else if (a.name < b.name) {
    //       return -sort.value;
    //     } else {
    //       return 0;
    //     }
    //   });
    // }
    // if (sort.by === "status") {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) {
    //       return -sort.value;
    //     } else if (a.status < b.status) {
    //       return sort.value;
    //     } else {
    //       return 0;
    //     }
    //   });
    // }
    // if (keyword) {
    //   // tasks = tasks.filter((task) => {
    //   //   return (task = task.name.toLowerCase().indexOf(keyword) !== -1);
    //   // });
    //   tasks = filter(tasks, (task) => {
    //     /* use third-party :lodash */
    //     return (task.name = task.name.toLowerCase().indexOf(keyword) !== -1);
    //   });
    // }
    var elmTaskForm = isDisplayForm ? (
      <TaskForm taskEdit={taskEditing} />
    ) : (
      ""
    );
    return (
      <div classname="App">
        <div className="container">
          <div className="text-center">
            <h1>Task Management</h1>
            <hr />
          </div>
          <div className="row">
            <div
              className={
                isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {elmTaskForm}
            </div>
            <div
              className={
                isDisplayForm
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToggleForm}
              >
                <span className="fa fa-plus mr-5" />
                Thêm Công Việc
              </button>

              <Control
                onSearch={this.onSearch}
                onSort={this.onSort}
                sort={sort}
              />
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(toggleForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
