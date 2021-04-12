import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    marginRight: 10,
  },
})

function ButtonsContainer({ isEditing, setIsEditing, submit }) {
  const { button } = useStyles()
  const history = useHistory()

  function goBack() {
    history.push('/')
  }

  return (
    <Box display="flex" alignItems="center">
      {isEditing ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            className={button}
            onClick={() => setIsEditing(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              submit()
              setIsEditing(false)
            }}
          >
            Salvar
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={button}
            onClick={goBack}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setIsEditing(true)}
          >
            Editar
          </Button>
        </>
      )}
    </Box>
  )
}

export default ButtonsContainer
