/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
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

import api from '../../services/Api'

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

const initialState = {
  name: '',
  capital: '',
  area: '',
  population: '',
  topLevelDomain: '',
  flag: '',
}

function CountryInfo() {
  const classes = useStyles()
  const history = useHistory()

  const { name } = useParams()

  const [togleDisabled, setTogleDisabled] = useState(true)
  const [country, setCountry] = useState(initialState)

  useEffect(() => {
    api.get(`name/${name}?fullText=true`).then(({ data }) => {
      setCountry({
        ...initialState,
        name: data[0].name,
        capital: data[0].capital,
        area: data[0].area,
        population: data[0].population,
        topLevelDomain: data[0].topLevelDomain,
        flag: data[0].flag,
      })
    })
  }, [name])

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
              <CardMedia
                className={classes.cardMedia}
                image={country.flag}
                title="Contemplative Reptile"
              />
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
              value={country.name}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Capital"
              value={country.capital}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Área"
              value={country.area}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="População"
              value={country.population}
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={togleDisabled}
              label="Top-level domain"
              value={country.topLevelDomain}
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
