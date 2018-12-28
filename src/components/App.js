import "./App.scss"

import React, { Component } from "react"
import {
  BrowserRouter as Router
} from "react-router-dom"

import {
  initGoogleAnalytics,
  trackPage
} from "../analytics/GA"

import Overview from "./overview/Overview"

import Experience from "./content/Experience"

// Initialise the Goolge Analyiics tracking
initGoogleAnalytics()

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Router onUpdate={trackPage()}>
        <div className="App">
          <div className="wrapper">
            <div id="left" style={{ height: this.state.height }}>
              <Overview />
            </div>
            <div id="right" style={{ height: this.state.height }}>
              <Experience screenHeight={this.state.height} />}
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;