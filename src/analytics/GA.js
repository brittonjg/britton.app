import ReactGA from 'react-ga'

import { isDevEnv } from '../env/Helpers'

import { GA_Dev, GA_Prod } from '../config/Google'

/**
 * Initialises Googles Analytics
 * 
 * Note: Different tracking codes must be used per environment
 */
export function initGoogleAnalytics() {
    if (isDevEnv()) {
        ReactGA.initialize(GA_Dev,
            {
                debug: false,//Can be updated when necessary
            })
    } else {
        ReactGA.initialize(GA_Prod);
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