import React from 'react'

export default class PageContainer extends React.Component {
  render() {
    return (
      <div className='page-container'>
        {this.props.children}
      </div>
    )
  }
}
