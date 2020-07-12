import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fonts: []
    };
  }
  componentDidMount = () => {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDbhiSfHjnsyxiXrjmOER-86aAmdza_cRA"
    )
      .then(res => res.json())
      .then(({ items }) =>
        // this.props.dispatch({ type: "ADD_FONTS", payload: items })
        this.setState({ fonts: items }, () => {
          this.props.dispatch({ type: "ADD_FONTS", payload: items });
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="container">
          {this.state.fonts.length ? <Home /> : <Loading />}
        </div>
      </Router>
    );
  }
}

export default connect()(App);
