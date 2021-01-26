import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTask } from "../actions";

class TaskSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            name="keyword"
            value={keyword}
            onChange={this.onChange}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onSearch}
            >
              <span className="fa fa-search mr-5" />
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(searchTask(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(TaskSearch);
