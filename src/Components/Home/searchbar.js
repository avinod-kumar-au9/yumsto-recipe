import React from "react";
import { SearchApi } from "./apifile";
import SearchDetail from "./searchDetail";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SearchAction } from "../../Store/Actions/searchAction";
class Search extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: SearchAction.homesearchApi,
      payload: "",
    });
  }

  searchItemChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      this.props.dispatch(SearchApi(e.target.value));
    } else {
      this.props.dispatch({
        type: SearchAction.homesearchApi,
        payload: "",
      });
    }
  };

  render() {
    console.log(this.props.searchApiData);
    return (
      <div>
        <SearchDetail
          searchItemChangeHandler={this.searchItemChangeHandler}
          searchApiData={this.props.searchApiData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchApiData: state.search1_reducer.searchDataS,
  };
};

export default withRouter(connect(mapStateToProps)(Search));
