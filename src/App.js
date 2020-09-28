import React, { Component } from "react";
import { connect } from "react-redux";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import ErrorCardlist from "./ErrorCardlist";
import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const Filtered = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(robots[0]);

    if (isPending) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc bg">
          <h1 className="ma0 pa3">Robofriends</h1>
          <Searchbox searchChange={onSearchChange} />
          <ErrorCardlist>
            <Cardlist robots={Filtered} />
          </ErrorCardlist>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
