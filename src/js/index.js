import React from 'react'
import { render } from 'react-dom'
import '../scss/index.scss'
import AppComponent from './AppComponent.js'

render((
  <AppComponent/>
), document.getElementById('demo'))
