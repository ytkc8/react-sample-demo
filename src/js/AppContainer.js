import React from 'react'
import AppHeader from './AppHeader'
import TopPage from './Top/TopPage'

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <div>
          <TopPage/>
        </div>
      </div>
    )
  }
}
