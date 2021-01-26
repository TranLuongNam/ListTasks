import React, { Component } from "react";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import { editTask, openForm } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
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

  onChangeForm = () => {
    this.props.onOpenForm();
    this.props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
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
    var { filter, keyword, sort } = this.state;
    var { isDisplayForm } = this.props;

 
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
              <TaskForm />
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
                onClick={this.onChangeForm}
              >
                <span className="fa fa-plus mr-5" />
                Thêm Công Việc
              </button>

              <TaskControl
                onSearch={this.onSearch}
                onSort={this.onSort}
                sort={sort}
              />
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList />
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
    ItemEdit: state.ItemEdit,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    // onToggleForm: () => {
    //   dispatch(toggleForm());
    // },
    onClearTask: (task) => {
      dispatch(editTask(task));
    },
    onOpenForm: () => {
      dispatch(openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
