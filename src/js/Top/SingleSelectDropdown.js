import React from 'react'
import PropTypes from 'prop-types'

export default class SingleSelectDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionsAreVisible: false,
      inputtedValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.clearValue = this.clearValue.bind(this)
  }

  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
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

  handleOutsideClick(event) {
    if (event.target.className !== 'option') {
      this.setState({optionsAreVisible: false})
    }
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
              className='option'
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
      <div className='single-select'>
        <div className='input-section'>
          <input
            type='text'
            className='input-box'
            value={this.state.inputtedValue}
            onChange={this.handleChange}
          />
          <button className='clear' onClick={this.clearValue}>×</button>
        </div>
        <div className='select-options'>
          {this.displayOptions()}
        </div>
      </div>
    )
  }
}

SingleSelectDropdown.propTypes = {
  options: PropTypes.array
}
