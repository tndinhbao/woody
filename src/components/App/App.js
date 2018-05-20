import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '../UI/styles'
import Grid from '../UI/Grid'
import AppBar from '../UI/AppBar'
import Typography from '../UI/Typography'
import Button from '../UI/Button'
import { FiberNew } from '../UI/Icons'
import ProductList from '../ProductList'
import HomeSlider from '../HomeSlider/HomeSlider'

const App = withStyles(theme => ({
  shortAddress: {
    background: theme.palette.primary.main,
    '& *': {
      color: 'white'
    },
    '& span': {
      padding: theme.spacing.unit
    }
  },
  root: {
    flexGrow: 1
  },
  header: {
    // background: theme.palette.primary.main
  },
  appbar: {
    background: theme.palette.common.white
  },
  button: {
    margin: theme.spacing.unit
  },
  contrastText: {
    color: '#fff'
  },
  homeSlider: {
    display: 'flex',
    flexDirection: 'column',
    'padding-left': 100,
    'padding-right': 100
  },
  newArrival: {
    padding: theme.spacing.unit * 10,
    '& > header': {
      padding: theme.spacing.unit * 4,
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}))(({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.shortAddress}>
          <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item xs={12} sm={6}>
              <Typography
                align="center"
                variant="body2"
                component="span"
              >{`HOTLINE: 093 274 6789 (Zalo) - 093 496 8848`}</Typography>
            </Grid>
            <Hidden smDown>
              <Grid item xs={6}>
                <Typography
                  align="center"
                  variant="body2"
                  component="span"
                >{`Email: woodyfurniture@gmail.com`}</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </div>
        <AppBar
          position="sticky"
          classes={{
            root: classes.appbar
          }}
        >
          <div>
            <Grid container justify="center" alignItems="center" spacing={8}>
              <Grid item xs={12} sm={5}>
                <Typography align="center" variant="title">
                  woody
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button size="small" className={classes.button}>
                  Bàn ghế ngoài trời
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button size="small" className={classes.button}>
                  Tài khoản
                </Button>
              </Grid>
            </Grid>
          </div>
        </AppBar>
      </div>
      <div className={classes.homeSlider}>
        <HomeSlider />
      </div>
      <section className={classes.newArrival}>
        <header>
          <FiberNew color="primary" />
          <Typography color="primary" variant="headline">
            SẢN PHẨM MỚI
          </Typography>
        </header>
        <ProductList />
      </section>
    </div>
  )
})

export default App
