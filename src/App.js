import React, { Component } from "react";
import {connect} from 'react-redux';
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import ErrorCardlist from './ErrorCardlist';
import {setSearchField} from './actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {robots, searchField} = this.state;
    const Filtered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc bg-light-green">
          <h1 className="ma0 pa3">Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <ErrorCardlist>
            <Cardlist robots={Filtered} />
          </ErrorCardlist>
        </div>
      );
    }
    
  }
}

export default connect()(App);
