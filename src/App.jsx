import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'

import Pages from './pages'

function App() {
  return (
    <Router>
      <CssBaseline>
        <Pages />
      </CssBaseline>
    </Router>
  )
}

export default App
