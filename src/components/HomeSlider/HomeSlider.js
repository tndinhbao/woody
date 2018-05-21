import React from 'react'
import Slider from 'react-slick'
import { withStyles } from '../UI/styles'
import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'
import product4 from '../../images/product-4.jpg'

const HomeSlider = withStyles({
  root: {
    '& img': {
      height: 300
    }
  },
  item: {
    'background-image': `url(${product1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 500
  }
})(props => {
  const { classes } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <div
            style={{
              backgroundImage: `url(${product1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 500
            }}
          />
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${product2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 500
            }}
          />
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${product3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 500
            }}
          />
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${product4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 500
            }}
          />
        </div>
      </Slider>
    </div>
  )
})

export default HomeSlider
