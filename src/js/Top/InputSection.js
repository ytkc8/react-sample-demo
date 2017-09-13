import React from 'react'

import InnerContainer from '../Containers/InnerContainer'
import WrapComponentContainer from '../Containers/WrapComponentContainer'

export default class InputSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {content: ''}

    this.handleInput = this.handleInput.bind(this)
    this.handlePushClick = this.handlePushClick.bind(this)
    this.handleEnqueueClick = this.handleEnqueueClick.bind(this)
  }

  handleInput(event) {
    this.setState({content: event.target.value})
  }

  handlePushClick(event) {
    let stackContent = {name: this.state.content}
    this.props.pushWasClicked(stackContent)
  }

  handleEnqueueClick(event) {
    let queueContent = {name: this.state.content}
    this.props.enqueueWasClicked(queueContent)
  }

  render() {
    return (
      <InnerContainer>
        <WrapComponentContainer>
          <h2 className='title'>input</h2>
          <div className='wrap'>
            <input ref='content-input' className='input group' onChange={this.handleInput}/>
          </div>
          <div className='wrap'>
            <button className='push primary' onClick={this.handlePushClick}>push</button>
            <button className='enqueue primary' onClick={this.handleEnqueueClick}>enqueue</button>
          </div>
        </WrapComponentContainer>
      </InnerContainer>
    )
  }
}

InputSection.propTypes = {
  pushWasClicked: React.PropTypes.func.isRequired,
  enqueueWasClicked: React.PropTypes.func.isRequired
}
