import React, { Component } from 'react';

import './App.css';

import {
  Router,
  withRouter
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from './Theme'

import Button from '@material-ui/core/Button';

import { isMobile } from "react-device-detect";

import Lottie from 'react-lottie';
import rocket from './animations/rocket.json'

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

const HealthLink = props => <Link to="health.britton.app" {...props} />

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={createTheme}>
        <div className="App">
          <div className="App-nav" >
            <div>
              <Button color="primary" className={classes.button}>
                Contact
                </Button>
              <Button
                color="primary"
                // component={HealthLink}
                className={classes.button}>
                Health
                </Button>
            </div>
            <header className="App-header">
              <Lottie options={rocketOptions}
                height={isMobile ? 200 : 400}
                width={isMobile ? 200 : 400}
                isStopped={false}
                isPaused={false}
              />
              <p>It's coming soon...</p>
            </header>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);