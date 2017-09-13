import React from 'react'

export default class TertiaryContainer extends React.Component {
  render() {
    return (
      <div className='section-container tertiary'>
        {this.props.children}
      </div>
    )
  }
}
