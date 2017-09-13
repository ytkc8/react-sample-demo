import React from 'react'

export default class WrapComponentContainer extends React.Component {
  render() {
    return (
      <div className='wrap-component'>
        {this.props.children}
      </div>
    )
  }
}
