import React from 'react'

export default class PrimaryContainer extends React.Component {
  render() {
    return (
      <div className='section-container primary'>
        {this.props.children}
      </div>
    )
  }
}
