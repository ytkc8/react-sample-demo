import React from 'react'

import InnerContainer from '../Containers/InnerContainer'
import WrapComponentContainer from '../Containers/WrapComponentContainer'

export default class BoxSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showContents: true
    }

    this.handleContentDeleteButtonClick = this.handleContentDeleteButtonClick.bind(this)
    this.handleHideButtonClick = this.handleHideButtonClick.bind(this)
    this.handleShowButtonClick = this.handleShowButtonClick.bind(this)
  }

  displayContentList(contents) {
    if (this.state.showContents) {
      return contents.map((content, i) => {
        return (
          <div className='content inner-box' key={i}>{i+1}: {content.name}</div>
        )
      })
    }
  }

  handleContentDeleteButtonClick() {
    this.props.buttonWasClicked(this.props.contentList)
  }

  handleHideButtonClick() {
    this.setState({showContents: false})
  }

  handleShowButtonClick() {
    this.setState({showContents: true})
  }

  displayHideButton() {
    if (this.state.showContents) {
      return (
        <button className='hide-button secondary' onClick={this.handleHideButtonClick}>
          hide
        </button>
      )
    }
  }

  displayShowButton() {
    if (!this.state.showContents) {
      return (
        <button className='show-button secondary' onClick={this.handleShowButtonClick}>
          show
        </button>
      )
    }
  }

  render() {
    return (
      <InnerContainer>
        <WrapComponentContainer>
          <h2 className='title'>{this.props.pageContent.title}</h2>
          <div className='wrap'>
            <button className='content-button primary' onClick={this.handleContentDeleteButtonClick}>
              {this.props.pageContent.buttonName}
            </button>
            {this.displayHideButton()}
            {this.displayShowButton()}
          </div>
          <div className='wrap'>
            {this.displayContentList(this.props.contentList)}
          </div>
        </WrapComponentContainer>
      </InnerContainer>
    )
  }
}

BoxSection.propTypes = {
  contentList: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.number,
      name: React.PropTypes.string
    })
  ).isRequired,
  pageContent: React.PropTypes.shape({
    title: React.PropTypes.string,
    buttonName: React.PropTypes.string
  }).isRequired,
  buttonWasClicked: React.PropTypes.func.isRequired
}
