/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
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
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

import api from '../services/Api'

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
  media: {
    height: 200,
  },
  pagination: {
    margin: theme.spacing(5),
    '& ul': {
      justifyContent: 'center',
    },
  },
}))

function Home() {
  const classes = useStyles()
  const [data, setData] = useState()

  useEffect(() => {
    api.get('all').then(setData)
  }, [])
  console.log(data)
  function createList() {
    const list = []
    for (let i = 0; i < 200; i++) {
      list.push(i)
    }
    return list
  }

  const lista = createList()

  return (
    <Container fixed>
      <form className={classes.input} noValidate autoComplete="off">
        <TextField label="Buscar país" variant="outlined" color="secondary" />
      </form>
      <Divider />

      <Grid container className={classes.grid} spacing={4}>
        {lista.map(item => (
          <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    País
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Capital
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        color="secondary"
        className={classes.pagination}
        count={lista.length}
        size="large"
      />
    </Container>
  )
}

export default Home
