import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  Button,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { getCountry } from '../../store/fetchActions'

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  cardMedia: {
    height: 400,
  },
  button: {
    marginRight: 10,
  },
})

function CountryInfo() {
  const classes = useStyles()
  const history = useHistory()
  const { idName } = useParams()

  const [togleDisabled, setTogleDisabled] = useState(true)
  const [{ flag, name, capital, area, population, topLevelDomain }] = useSelector(
    state => state.country
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountry(idName))
  }, [idName, dispatch])

  function goBack() {
    history.push('/')
  }

  function handleSubmit() {
    console.log('teste')
  }

  function handleEdit() {
    const togle = !togleDisabled
    setTogleDisabled(togle)

    if (togle) {
      handleSubmit()
    }
  }

  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={6} lg={6}>
          <Card>
            <CardActionArea>
              <CardMedia className={classes.cardMedia} image={flag} title="Contemplative Reptile" />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <form noValidate autoComplete="off">
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="País"
              value={name}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Capital"
              value={capital}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Área"
              value={area}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="População"
              value={population}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Top-level domain"
              value={topLevelDomain}
              variant="outlined"
            />
            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                className={classes.button}
                onClick={goBack}
              >
                Voltar
              </Button>
              <Button variant="contained" color="secondary" fullWidth onClick={handleEdit}>
                {togleDisabled ? 'Editar' : 'Salvar'}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CountryInfo
