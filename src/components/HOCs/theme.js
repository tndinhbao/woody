import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '../UI/styles'
import blue from '@material-ui/core/colors/blue'

const muiTheme = createMuiTheme({
  textEllipsis: {
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis'
  },
  mixins: {
    // toolbar: {
    //   minHeight: 48,
    //   '@media (min-width:600px)': {
    //     minHeight: 48
    //   }
    // }
  },
  palette: {
    primary: {
      main: blue[400]
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
