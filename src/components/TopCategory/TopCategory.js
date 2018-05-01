import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import banner1 from '../../images/banner-1-573x914.jpg'
import banner2 from '../../images/banner-2-573x432.jpg'
import banner3 from '../../images/banner-3-573x432.jpg'
import banner4 from '../../images/banner-4-573x914.jpg'

const tileData = [
  {
    img: banner1,
    title: 'Image',
    author: 'author'
  },
  {
    img: banner2,
    title: 'Image',
    author: 'author'
  },
  {
    img: banner3,
    title: 'Image',
    author: 'author'
  },
  {
    img: banner4,
    title: 'Image',
    author: 'author'
  }
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
})

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridList(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SingleLineGridList)
