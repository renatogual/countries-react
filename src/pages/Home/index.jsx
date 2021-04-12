import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
// import Pagination from '@material-ui/lab/Pagination'

import Input from '../../components/Input'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

import { getAllCountries } from '../../store/fetchActions'
import { searchCountry } from '../../store/countries'

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  // pagination: {
  //   margin: theme.spacing(5),
  //   '& ul': {
  //     justifyContent: 'center',
  //   },
  // },
}))

function Home() {
  const { grid } = useStyles()

  const { countries, search, filteredCountries } = useSelector(
    state => state.countries
  )
  const dispatch = useDispatch()

  document.title = 'Lista de países'
  document.getElementById('favicon').href = 'favicon.ico'

  const listCountries = search.length > 0 ? filteredCountries : countries

  useEffect(() => {
    if (!countries.length) {
      dispatch(getAllCountries())
    }
  }, [dispatch, countries])

  function handleSearch(e) {
    const searchName = e.target.value
    dispatch(searchCountry(searchName))
  }

  return (
    <Container fixed>
      <form noValidate autoComplete="off">
        <Input label="Buscar País" onChange={handleSearch} />
      </form>

      <Grid container className={grid} spacing={4}>
        {countries?.length > 0 ? (
          listCountries?.map(item => (
            <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
              <Card flag={item.flag} name={item.name} capital={item.capital} />
            </Grid>
          ))
        ) : (
          <Loader />
        )}
      </Grid>
      {/* <Pagination color="secondary" className={classes.pagination} count={10} size="large" /> */}
    </Container>
  )
}

export default Home
