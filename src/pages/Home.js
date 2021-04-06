import React, { useEffect, useState } from 'react'
import { Container, TextField } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import api from '../services/Api'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(5),
      width: '50%',
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
  return (
    <Container fixed>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="Buscar país" variant="outlined" />
      </form>
    </Container>
  )
}

export default Home
