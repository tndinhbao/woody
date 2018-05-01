import React from 'react'
import { withStyles } from 'material-ui/styles'
import Appbar from './components/Appbar'
import TopBanner from './components/TopBanner'
import TopCategory from './components/TopCategory'

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.banner}>
        <TopBanner />
      </div>
      <div>
        <TopCategory />
      </div>
    </div>
  )
}

export default withStyles(theme => ({
  banner: {
    marginTop: theme.spacing.unit
  }
}))(App)
