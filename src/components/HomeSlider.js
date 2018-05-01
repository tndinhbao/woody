import React from 'react'
import { withStyles } from 'material-ui/styles'
import Slider from 'react-slick'
import product1 from '../images/product-1.jpg'

const HomeSlider = ({ classes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default withStyles({
  img: {
    width: '90%',
    height: '500px'
  }
})(HomeSlider)
