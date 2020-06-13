import React, { Component } from 'react';

class ErrorCardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(Error, info) {
    this.setState({hasError:true})
  }

  render() {
    if(this.state.hasError) {
      return <h1 className="tc white">Oops something is wrong</h1>
    } return this.props.children
  }
}

export default ErrorCardlist;