/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  cardMedia: {
    height: 400,
    width: 300,
  },
  button: {
    marginRight: 10,
  },
})

function CountryInfo() {
  const classes = useStyles()

  const aux = true

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
                // image={}
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
              disabled={aux}
              label="País"
              defaultValue="foo"
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={aux}
              label="Capital"
              defaultValue="foo"
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={aux}
              label="Área"
              defaultValue="foo"
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={aux}
              label="População"
              defaultValue="foo"
              variant="outlined"
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              disabled={aux}
              label="Top-level domain"
              defaultValue="foo"
              variant="outlined"
            />
            <Box display="flex" alignItems="center">
              <Button variant="contained" color="secondary" fullWidth className={classes.button}>
                Voltar
              </Button>
              <Button variant="contained" color="secondary" fullWidth>
                Editar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CountryInfo
