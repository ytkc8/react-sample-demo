import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {Router, Route} from 'react-router'

import AppComponent from '../../src/js/AppComponent'
import AppHeader from '../../src/js/AppHeader'
import TopPage from '../../src/js/Top/TopPage'

describe('AppComponent', () => {
  let appComponent, configuredRoutes, findRoutePropsForComponent

  beforeEach(() => {
    appComponent = shallow(<AppComponent/>)
    const routes = appComponent.find(Route)

    configuredRoutes = routes.nodes.map((route) => {
      return {
        path: route.props.path,
        componentName: route.props.component.name,
        allProps: route.props
      }
    })

    findRoutePropsForComponent = (componentName) => {
      return configuredRoutes.find(route =>
        route.componentName == componentName
      )
    }
  })

  it('includes the AppHeader route', () => {
    const appHeader = findRoutePropsForComponent('AppHeader')

    expect(appHeader.path).toBe('')
  })

  it('includes the top page route', () => {
    const topPage = findRoutePropsForComponent('TopPage')

    expect(topPage.path).toBe('/')
  })
})
