import React, { Component } from "react";
import { connect } from "react-redux";
import { setTitle } from './actions/rootActions'
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App" onClick={() => this.props.setTitle()}>
        <h1>Title : {this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: () => { dispatch(setTitle()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)