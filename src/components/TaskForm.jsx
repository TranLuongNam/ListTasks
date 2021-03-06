import React, { Component } from "react";
import { connect } from "react-redux";
import { closeForm, saveTask } from "../actions";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentDidMount() {
    if (this.props.ItemEdit) {
      this.setState({
        id: this.props.ItemEdit.id,
        name: this.props.ItemEdit.name,
        status: this.props.ItemEdit.status,
      });
    } else {
      this.onClear();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.ItemEdit) {
      this.setState({
        id: nextProps.ItemEdit.id,
        name: nextProps.ItemEdit.name,
        status: nextProps.ItemEdit.status,
      });
    } else if (!nextProps.ItemEdit) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    // console.log(value);
    // console.log(typeof value);
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    const { id } = this.state;
    if (!this.props.isDisplayForm) {
      return "";
    }
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!id ? "Thêm Công Việc" : "Cập Nhật Công Việc"}
            <span
              className="fa fa-times-circle text-right "
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
              required="required"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy bỏ
              </button>
            </div>
          </form>
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
    onSaveTask: (task) => {
      dispatch(saveTask(task));
    },
    onCloseForm: () => {
      dispatch(closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
