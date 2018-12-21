import ReactGA from 'react-ga'

import { isDevEnv } from '../env/Helpers'

/**
 * Initialises Googles Analytics
 * 
 * Note: Different tracking codes must be used per environment
 */
export function initGoogleAnalytics() {
    const GA_CODE = process.env.REACT_APP_GA_CODE

    if (isDevEnv()) {
        ReactGA.initialize(GA_CODE,
            {
                debug: false,//Can be updated when necessary
            })
    } else {
        ReactGA.initialize(GA_CODE);
    }
}

/**
 * Tracks a change in page
 */
export function trackPage() {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

/**
 * Analytics User Click
 * 
 * @param {String} clickAction the action carried out by the user
 */
export function analyticsClick(clickAction) {
    ReactGA.event({
        category: 'User Click',
        action: clickAction,
    });
}