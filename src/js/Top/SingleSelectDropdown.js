import React from 'react'
import PropTypes from 'prop-types'

import WrapComponentContainer from '../Containers/WrapComponentContainer'

export default class SingleSelectDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionsAreVisible: false,
      inputtedValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.clearValue = this.clearValue.bind(this)
  }

  handleChange(event) {
    this.setState({
      optionsAreVisible: true,
      inputtedValue: event.target.value
    })
  }

  handleClick(event) {
    this.setState({
      optionsAreVisible: false,
      inputtedValue: event.target.value
    })
  }

  clearValue() {
    this.setState({
      optionsAreVisible: false,
      inputtedValue: ''
    })
  }

  displayOptions() {
    if (this.state.optionsAreVisible && this.state.inputtedValue.length > 0) {
      return this.props.options && this.props.options.map((option, i) => {
        if (option.value.indexOf(this.state.inputtedValue) > -1) {
          return (
            <button
              key={i}
              className='options'
              value={option.value}
              onClick={this.handleClick}
            >
              {option.value}
            </button>
          )
        }
      })
    }
  }

  render() {
    return (
      <WrapComponentContainer>
        <div className='wrap'>
          <input
            className='single-select group'
            value={this.state.inputtedValue}
            onChange={this.handleChange}
          />
        <button className='clear' onClick={this.clearValue}>x</button>
        </div>
        <div>
          {this.displayOptions()}
        </div>
      </WrapComponentContainer>
    )
  }
}

SingleSelectDropdown.propTypes = {
  options: PropTypes.array
}
