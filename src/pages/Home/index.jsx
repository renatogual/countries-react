import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Divider,
  Grid,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
// import Pagination from '@material-ui/lab/Pagination'

import { getAllCountries } from '../../store/fetchActions'
import { searchCountry } from '../../store/countries'

const useStyles = makeStyles(theme => ({
  input: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(5),
      width: '50%',
    },
  },
  grid: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  cardMedia: {
    minHeight: 250,
  },
  progress: {
    height: '100vh',
    width: '100%',
  },
  // pagination: {
  //   margin: theme.spacing(5),
  //   '& ul': {
  //     justifyContent: 'center',
  //   },
  // },
}))

function Home() {
  const classes = useStyles()
  const {
    countries: { list, search, filteredList },
  } = useSelector(state => state)
  const dispatch = useDispatch()

  const listCountries = search.length > 0 ? filteredList : list

  // console.log(listCountries)

  useEffect(() => {
    if (!list.length) {
      dispatch(getAllCountries())
    }
  }, [dispatch, list])

  function handleSearch(e) {
    const searchName = e.target.value
    dispatch(searchCountry(searchName))
  }

  return (
    <Container fixed>
      <form className={classes.input} noValidate autoComplete="off">
        <TextField
          label="Buscar país"
          variant="outlined"
          color="secondary"
          onChange={handleSearch}
        />
      </form>
      <Divider />

      <Grid container className={classes.grid} spacing={4}>
        {listCountries ? (
          listCountries?.map(item => (
            <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
              <Link to={`/name/${item.name}`} className={classes.link}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.flag}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.capital}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.progress}
          >
            <CircularProgress color="secondary" />
          </Box>
        )}
      </Grid>
      {/* <Pagination color="secondary" className={classes.pagination} count={10} size="large" /> */}
    </Container>
  )
}

export default Home
