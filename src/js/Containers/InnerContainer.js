import React from 'react'

export default class InnerContainer extends React.Component {
  render() {
    return (
      <div className='inner-container'>
        {this.props.children}
      </div>
    )
  }
}
