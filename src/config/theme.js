import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const muiTheme = createMuiTheme({
  textEllipsis: {
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis'
  },
  label: '#BD7468',
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#504F4F'
    },
    secondary: {
      main: '#f4b13e',
      light: '#ffe36f',
      dark: '#bd8200',
      contrastText: '#504F4F'
    },
    background: {
      grey: '#F6F6F6'
    }
  },
  typography: {
    fontFamily: '"Libre Franklin", "Roboto", "Helvetica", "Arial", sans-serif'
  }
})

const withTheme = WrappedComponent =>
  class ThemeWrapped extends React.Component {
    render() {
      return (
        <MuiThemeProvider theme={muiTheme}>
          <WrappedComponent {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

export default withTheme
