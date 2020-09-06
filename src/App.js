import React, { Component } from "react";
import { connect } from "react-redux";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import ErrorCardlist from "./ErrorCardlist";
import { setSearchField } from "./actions";

const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const Filtered = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
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
