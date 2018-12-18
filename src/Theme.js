import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e94353',
        }
    },
    background: {
        normal: '#FFFFFF'
    },
})

function createTheme() {
    return Theme
}

export default createTheme