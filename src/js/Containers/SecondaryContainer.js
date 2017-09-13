import React from 'react'

export default class SeconaryContainer extends React.Component {
  render() {
    return (
      <div className='section-container secondary'>
        {this.props.children}
      </div>
    )
  }
}
