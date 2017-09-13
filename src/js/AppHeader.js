import React from 'react'

import HeaderContainer from './Containers/HeaderContainer'

export default class AppHeader extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <h2 className='title'>React Study</h2>
        </HeaderContainer>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
