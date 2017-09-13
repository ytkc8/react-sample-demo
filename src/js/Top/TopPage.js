import React from 'react'

import PageContainer from '../Containers/PageContainer'
import PrimaryContainer from '../Containers/PrimaryContainer'
import SecondaryContainer from '../Containers/SecondaryContainer'
import TertiaryContainer from '../Containers/TertiaryContainer'

import InputSection from './InputSection'
import BoxSection from './BoxSection'

export default class TopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {stackList: [], queueList: []}

    this.pushContent = this.pushContent.bind(this)
    this.popContent = this.popContent.bind(this)
    this.enqueueContent = this.enqueueContent.bind(this)
    this.dequeueContent = this.dequeueContent.bind(this)
  }

  pushContent(content) {
    if (content.name) {
      this.state.stackList.unshift(content)
      this.setState({stackList: this.state.stackList})
    }
  }

  enqueueContent(content) {
    if (content.name) {
      this.state.queueList.push(content)
      this.setState({queueList: this.state.queueList})
    }
  }

  popContent(content) {
    content.shift()
    this.setState({stackList: content})
  }

  dequeueContent(content) {
    content.shift()
    this.setState({queueList: content})
  }

  render() {
    const statckContent = {
      title: 'stack box',
      buttonName: 'pop'
    }

    const queueContent = {
      title: 'queue box',
      buttonName: 'dequeue'
    }

    return (
      <PageContainer>
        <PrimaryContainer>
          <InputSection
            pushWasClicked={this.pushContent}
            enqueueWasClicked={this.enqueueContent}
          />
        </PrimaryContainer>
        <SecondaryContainer>
          <BoxSection
            contentList={this.state.stackList}
            pageContent={statckContent}
            buttonWasClicked={this.popContent}
          />
        </SecondaryContainer>
        <TertiaryContainer>
          <BoxSection
            contentList={this.state.queueList}
            pageContent={queueContent}
            buttonWasClicked={this.dequeueContent}
          />
        </TertiaryContainer>
      </PageContainer>
    )
  }
}
