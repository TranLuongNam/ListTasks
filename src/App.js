import React, { Component } from "react";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import { editTask, openForm } from "./actions";

class App extends Component {
  onChangeForm = () => {
    this.props.onOpenForm();
    this.props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
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
    var { isDisplayForm } = this.props;

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

              <TaskControl />
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
    onClearTask: (task) => {
      dispatch(editTask(task));
    },
    onOpenForm: () => {
      dispatch(openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
