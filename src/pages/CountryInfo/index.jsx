/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Grid, TextField, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { addCountryInfo, editCountry } from '../../store/countries'

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
  },
  button: {
    marginRight: 10,
  },
})

function CountryInfo() {
  const classes = useStyles()
  const history = useHistory()
  const { idName } = useParams()
  const dispatch = useDispatch()

  const {
    countries: { details },
  } = useSelector(state => state)

  console.log(details)

  const [buttonEdit, setButtonEdit] = useState(true)
  const [nameInput, setNameInput] = useState(details?.name)
  const [capitalInput, setCapitalInput] = useState(details?.capital)
  const [areaInput, setareaInput] = useState(details?.area)
  const [populationInput, setPopulationInput] = useState(details?.population)
  const [topLevelDomainInput, setTopLevelDomainInput] = useState(details?.topLevelDomain)

  console.log(nameInput)

  useEffect(() => {
    dispatch(addCountryInfo(idName))
  }, [dispatch, idName])

  function goBack() {
    history.push('/')
  }

  function handleSubmit() {
    const newCountry = {
      name: nameInput,
      capital: capitalInput,
      area: areaInput,
      population: populationInput,
      topLevelDomain: topLevelDomainInput,
    }
    dispatch(editCountry(newCountry))
  }

  function handleButton() {
    const buttonSave = !buttonEdit
    setButtonEdit(buttonSave)

    if (buttonSave) {
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
        <Grid item xs={12} sm={6}>
          <img src={details.flag} className={classes.cardMedia} alt={details.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form noValidate autoComplete="off">
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={buttonEdit}
              label="País"
              value={nameInput}
              variant="outlined"
              onChange={e => setNameInput(e.target.value)}
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={buttonEdit}
              label="Capital"
              value={capitalInput}
              variant="outlined"
              onChange={e => setCapitalInput(e.target.value)}
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={buttonEdit}
              label="Área"
              value={areaInput}
              variant="outlined"
              onChange={e => setareaInput(e.target.value)}
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={buttonEdit}
              label="População"
              value={populationInput}
              variant="outlined"
              onChange={e => setPopulationInput(e.target.value)}
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={buttonEdit}
              label="Domínio"
              value={topLevelDomainInput}
              variant="outlined"
              onChange={e => setTopLevelDomainInput(e.target.value)}
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
              <Button variant="contained" color="secondary" fullWidth onClick={handleButton}>
                {buttonEdit ? 'Editar' : 'Salvar'}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CountryInfo
