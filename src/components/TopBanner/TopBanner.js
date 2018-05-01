import React from 'react'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Grid from '../UI/Grid'
import Paper from '../UI/Paper'
import banner1 from '../../images/banner-1-573x914.jpg'
import banner2 from '../../images/banner-2-573x432.jpg'
import banner3 from '../../images/banner-3-573x432.jpg'
import banner4 from '../../images/banner-4-573x914.jpg'

const styles = {
  // default: {
  //   height: '914px'
  // }
}
const TopBanner = ({ classes }) => {
  return (
    <section>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} className={classes.default}>
          <Banner image={banner1} />
        </Grid>
        <Grid item xs={12} sm={4} className={classnames(classes.default)}>
          <Banner image={banner2} />
          <Banner image={banner3} />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.default}>
          <Banner image={banner4} />
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(TopBanner)

const Banner = withStyles(theme => ({
  img: {
    'max-width': '100%',
    height: 'auto'
  }
}))(({ classes, image }) => {
  return (
    <Paper className={classes.root} square elevation={0}>
      <img className={classes.img} src={image} />
    </Paper>
  )
})
