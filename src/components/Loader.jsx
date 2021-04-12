import React from 'react'

import { Box, CircularProgress } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  progress: {
    height: '100vh',
    width: '100%',
  },
})

function Loader() {
  const { progress } = useStyles()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={progress}
    >
      <CircularProgress color="primary" />
    </Box>
  )
}

export default Loader
