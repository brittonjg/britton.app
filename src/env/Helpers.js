/**
 * Is Development Environment
 * 
 * @returns{Boolean} true if development environment
 */
export function isDevEnv() {
    if (window.location.hostname === 'localhost') {
        return true
    }
    return false
}