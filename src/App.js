import './App.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { MuiThemeProvider } from '@material-ui/core/styles'
import createTheme from './Theme'

import Button from '@material-ui/core/Button'

import Lottie from 'react-lottie'
import rocket from './animations/rocket.json'

import SocialMediaIcons from 'react-social-media-icons';

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

const socialMediaIcons = [
  {
    url: 'https://www.linkedin.com/in/jgbritton/',
    className: 'fa-linkedin',
  },
  {
    url: 'https://github.com/brittonjg',
    className: 'fa-github',
  },
  {
    url: 'https://www.instagram.com/britton.jg/',
    className: 'fa-instagram',
  },
  {
    url: 'https://www.last.fm/user/mcdillon',
    className: 'fa-lastfm',
  },
];

const HealthLink = props =>
  <a href="https://health.britton.app" target="_blank" rel="noopener noreferrer" {...props} >{props.children}</a>

const ContactLink = props =>
  <a href="mailto:james@britton.app" data-rel="external" {...props}>{props.children}</a>

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={createTheme()}>
        <div className="App">
          <div className="App-nav" >
            <div>
              <Button color="primary"
                component={ContactLink}
                className={classes.button}>
                Contact
                </Button>
              <Button
                color="primary"
                component={HealthLink}
                className={classes.button}>
                Health
                </Button>
            </div>
            <header className="App-main">
              <Lottie options={rocketOptions}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
              <p>Launching soon...</p>
              <SocialMediaIcons
                icons={socialMediaIcons}
                iconSize={'1em'}
                iconColor={'#455a64'}
              />
            </header>
          </div>
          <div className="App-footer">
            <p>© 2018 James Britton</p>
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