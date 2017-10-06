import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import AppContainer from '../../src/js/AppContainer'

describe('AppContainer', () => {
  let appContainer
  beforeEach(() => {
    appContainer = shallow(<AppContainer/>)
  })

  it('displays header', () => {
    expect(appContainer.find('AppHeader').length).toBe(1)
  })

  it('displays top page', () => {
    expect(appContainer.find('TopPage').length).toBe(1)
  })
})
