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
    typography: {
        useNextVariants: true, // To enable switching to Typography v2
        // Use the system font over Roboto.
        fontFamily: "'Raleway', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
})

function createTheme() {
    return Theme
}

export default createTheme