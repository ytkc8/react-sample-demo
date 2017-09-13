import React from 'react'

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <header className='header-container'>
        {this.props.children}
      </header>
    )
  }
}
