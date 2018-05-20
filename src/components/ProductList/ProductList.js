import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '../UI/styles'
import Grid from '../UI/Grid'
import Typography from '../UI/Typography'
import Button from '../UI/Button'
import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'
import product4 from '../../images/product-4.jpg'

const ProductList = withStyles({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})(props => {
  const { classes } = props
  return (
    <Grid container justify="center" spacing={8}>
      <Grid item xs>
        <Card>
          <CardMedia className={classes.media} image={product1} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="headline" component="h2" align="center">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs>
        <Card>
          <CardMedia className={classes.media} image={product2} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="headline" component="h2" align="center">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs>
        <Card>
          <CardMedia className={classes.media} image={product3} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="headline" component="h2" align="center">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs>
        <Card>
          <CardMedia className={classes.media} image={product4} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="headline" component="h2" align="center">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
})

export default ProductList
