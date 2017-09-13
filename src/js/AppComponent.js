import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import TopPage from './Top/TopPage'
import AppHeader from './AppHeader'

export default function AppComponent() {
  return (
    <Router history={hashHistory}>
      <Route path='' component={AppHeader}>
        <Route path='/' component={TopPage}/>
      </Route>
    </Router>
  )
}
