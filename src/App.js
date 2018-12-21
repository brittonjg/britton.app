import "./App.css"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

import { BrowserRouter as Router } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles"
import createTheme from "./Theme"

import {
  initGoogleAnalytics,
  trackPage,
  analyticsClick
} from "./analytics/GA";

import Button from "@material-ui/core/Button"

import { isMobile } from 'react-device-detect'
import Lottie from "react-lottie"
import rocket from "./animations/rocket.json"

import Footer from "./Footer"

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    float: "right"
  }
});

const rocketOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const HealthLink = props =>
  <a href="https://health.britton.app" target="_blank" rel="noopener noreferrer" {...props} >{props.children}</a>

const ContactLink = props =>
  <a href="mailto:james@britton.app" data-rel="external" {...props}>{props.children}</a>


// Initialise the Goolge Analyiics tracking
initGoogleAnalytics()

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Router onUpdate={trackPage()}>
        <MuiThemeProvider theme={createTheme()}>
          <div className="App">
            <div className="App-nav" >
              <div>
                <Button color="primary"
                  component={ContactLink}
                  onClick={() => { analyticsClick("Contact") }}
                  className={classes.button}>
                  Contact
                </Button>
                <Button
                  color="primary"
                  component={HealthLink}
                  onClick={() => { analyticsClick("Health") }}
                  className={classes.button}>
                  Health
                </Button>
              </div>
              <header className="App-main">
                <Lottie options={rocketOptions}
                  height={isMobile ? 350 : 400}
                  width={isMobile ? 350 : 400}
                  isStopped={false}
                  isPaused={false}
                />
                <p>Launching soon...</p>
              </header>
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);