import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
  Card as CardUI,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import { addCountryInfo } from '../store/countries'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  cardMedia: {
    minHeight: 250,
  },
})

function Card({ flag, name, capital }) {
  const { link, cardMedia } = useStyles()
  const dispatch = useDispatch()

  function countrySelected(country) {
    dispatch(addCountryInfo(country))
  }

  return (
    <Link to={`/name/${name}`} className={link}>
      <CardUI>
        <CardActionArea onClick={() => countrySelected(name)}>
          <CardMedia className={cardMedia} image={flag} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardUI>
    </Link>
  )
}

export default Card
