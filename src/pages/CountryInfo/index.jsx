import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { editCountry } from '../../store/countries'

import Input from '../../components/Input'
import ButtonsContainer from '../../components/ButtonsContainer'

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  imgSize: {
    height: '100%',
    width: '100%',
  },
})

function CountryInfo() {
  const { container, imgSize } = useStyles()
  const { idName } = useParams()
  const dispatch = useDispatch()

  const { country } = useSelector(state => state.countries)

  const [name, setName] = useState(country?.name)
  const [capital, setCapital] = useState(country?.capital)
  const [area, setArea] = useState(country?.area)
  const [population, setPopulation] = useState(country?.population)
  const [domain, setDomain] = useState(country?.topLevelDomain)

  const [isEditing, setIsEditing] = useState(false)

  document.title = idName
  document.getElementById('favicon').href = country?.flag

  function handleSubmit() {
    const newCountry = {
      name,
      capital,
      area,
      population,
      domain,
    }
    dispatch(editCountry(newCountry))
  }

  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={container}
      >
        <Grid item xs={12} sm={6}>
          <img src={country?.flag} className={imgSize} alt={country?.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form noValidate autoComplete="off">
            <Input
              label="País"
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="Capital"
              value={capital}
              onChange={e => setCapital(e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="Área"
              value={area}
              onChange={e => setArea(e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="População"
              value={population}
              onChange={e => setPopulation(e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="Domínio"
              value={domain}
              onChange={e => setDomain(e.target.value)}
              disabled={!isEditing}
            />

            <ButtonsContainer
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              submit={handleSubmit}
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CountryInfo
