import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {Router, Route} from 'react-router'

import AppComponent from '../../src/js/AppComponent'
import AppContainer from '../../src/js/AppContainer'

describe('AppComponent', () => {
  let appComponent, configuredRoutes, findRoutePropsForPath

  beforeEach(() => {
    appComponent = shallow(<AppComponent/>)
    const routes = appComponent.find(Route)

    configuredRoutes = routes.nodes.map((route) => {
      return {
        path: route.props.path,
        component: route.props.component,
        allProps: route.props
      }
    })

    findRoutePropsForPath = (path) => {
      return configuredRoutes.find(route =>
        route.path === path
      )
    }
  })

  it('renders AppContainer', () => {
    const appContainerPath = findRoutePropsForPath('')

    const appContainer = appContainerPath.allProps.render({anyKey: 'props'})
    expect(appContainer).toEqual(<AppContainer anyKey='props'/>)
  })
})
