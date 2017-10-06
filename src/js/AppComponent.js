import React from 'react'
import {Route} from 'react-router'
import {HashRouter, Switch} from 'react-router-dom'

import AppContainer from './AppContainer'

export default function AppComponent() {
  return (
    <HashRouter>
      <Route exact path='' render={(props) => {return (<AppContainer {...props}/>)}}/>
    </HashRouter>
  )
}
