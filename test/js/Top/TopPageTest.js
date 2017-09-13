import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import TopPage from '../../../src/js/Top/TopPage'
import BoxSection from '../../../src/js/Top/BoxSection'

describe('TopPage', () => {
  afterEach(() => expect.restoreSpies())

  const statckContent = {
    title: 'stack box',
    buttonName: 'pop'
  }

  const queueContent = {
    title: 'queue box',
    buttonName: 'dequeue'
  }

  let topPage
  beforeEach(() => {
    topPage = shallow(<TopPage/>)
  })

  describe('display', () => {
    it('displays the InputSection', () => {
      const inputSection = topPage.find('InputSection')
      expect(inputSection.length).toBe(1)
    })

    it('displays the BoxSection', () => {
      const stackSection = topPage.find('BoxSection')
      expect(stackSection.length).toBe(2)
    })
  })

  describe('sets props to child', () => {
    it('sets function to InputSection', () => {
      const inputSection = topPage.find('InputSection')

      expect(inputSection.node.props.pushWasClicked).toEqual(
        topPage.instance().pushContent
      )
      expect(inputSection.node.props.enqueueWasClicked).toEqual(
        topPage.instance().enqueueContent
      )
    })

    it('sets content list to BoxSection', () => {
      const boxSections = topPage.find('BoxSection')

      const stackBoxProps = boxSections.at(0).node.props
      expect(stackBoxProps.contentList).toEqual(
        topPage.instance().state.stackList
      )
      expect(stackBoxProps.pageContent).toEqual(statckContent)
      expect(stackBoxProps.buttonWasClicked).toEqual(
        topPage.instance().popContent
      )

      const queueBoxProps = boxSections.at(1).node.props
      expect(queueBoxProps.contentList).toEqual(
        topPage.instance().state.queueList
      )
      expect(queueBoxProps.pageContent).toEqual(queueContent)
      expect(queueBoxProps.buttonWasClicked).toEqual(
        topPage.instance().dequeueContent
      )
    })
  })

  describe('function behavior', () => {
    describe('pushContent', () => {
      it('all contents are valid', () => {
        const content1 = {name: 'test push content1'}
        const content2 = {name: 'test push content2'}

        topPage.instance().pushContent(content1)
        topPage.instance().pushContent(content2)
        const boxSections = topPage.find('BoxSection')

        const expectedList = [content2, content1]
        const boxProps = boxSections.at(0).node.props
        expect(boxProps.contentList).toEqual(expectedList)
      })

      it('one of contents is invalid', () => {
        const content1 = {}
        const content2 = {name: 'test enqueue content2'}

        topPage.instance().pushContent(content1)
        topPage.instance().pushContent(content2)
        const boxSections = topPage.find('BoxSection')

        const boxProps = boxSections.at(0).node.props
        expect(boxProps.contentList.length).toBe(1)
      })
    })

    describe('enqueueContent', () => {
      it('all contents are valid', () => {
        const content1 = {name: 'test enqueue content1'}
        const content2 = {name: 'test enqueue content2'}

        topPage.instance().enqueueContent(content1)
        topPage.instance().enqueueContent(content2)
        const boxSections = topPage.find('BoxSection')

        const expectedList = [content1, content2]
        const boxProps = boxSections.at(1).node.props
        expect(boxProps.contentList).toEqual(expectedList)
      })

      it('one of contents is invalid', () => {
        const content1 = ''
        const content2 = {name: 'test enqueue content2'}

        topPage.instance().enqueueContent(content1)
        topPage.instance().enqueueContent(content2)
        const boxSections = topPage.find('BoxSection')

        const boxProps = boxSections.at(1).node.props
        expect(boxProps.contentList.length).toBe(1)
      })
    })

    it('popContent', () => {
      const contents = [
        {name: 'test push content1'},
        {name: 'test push content2'}
      ]

      topPage.instance().popContent(contents)

      const expectedContent = [{name: 'test push content2'}]
      expect(topPage.instance().state.stackList).toEqual(expectedContent)
    })

    it('qneueContent', () => {
      const contents = [
        {name: 'test push content1'},
        {name: 'test push content2'}
      ]

      topPage.instance().dequeueContent(contents)

      const expectedContent = [{name: 'test push content2'}]
      expect(topPage.instance().state.queueList).toEqual(expectedContent)
    })
  })
})
