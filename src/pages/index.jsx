import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import CountryInfo from './CountryInfo'

function Pages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/name/:idName" component={CountryInfo} />
    </Switch>
  )
}

export default Pages
