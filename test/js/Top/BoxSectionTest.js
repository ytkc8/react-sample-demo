import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import BoxSection from '../../../src/js/Top/BoxSection'

describe('BoxSection', () => {
  afterEach(() => expect.restoreSpies())

  const contentList = [{name: 'test1'},{name: 'test2'}]
  const pageContent = {
    title: 'test title',
    buttonName: 'test button'
  }

  let boxSection, buttonFunctionSpy
  beforeEach(() => {
    buttonFunctionSpy = expect.createSpy()
    boxSection = shallow(
      <BoxSection
        contentList={contentList}
        pageContent={pageContent}
        buttonWasClicked={buttonFunctionSpy}
      />
    )
  })

  describe('display', () => {
    it('displays the title', () => {
      const title = boxSection.find('.title')

      expect(title.length).toBe(1)
      expect(title.text()).toBe('test title')
    })

    it('displays the delete content button', () => {
      const button = boxSection.find('button.content-button')

      expect(button.length).toBe(1)
      expect(button.text()).toBe('test button')
    })

    describe('by default', () => {
      it('displays the content list which accepted as props from parent', () => {
        const contents = boxSection.find('.content')

        expect(contents.at(0).text()).toBe('1: test1')
        expect(contents.at(1).text()).toBe('2: test2')
      })

      it('displays the hide button', () => {
        const button = boxSection.find('button.hide-button')

        expect(button.length).toBe(1)
        expect(button.text()).toBe('hide')
      })

      it('does not display the show button', () => {
        const button = boxSection.find('button.show-button')

        expect(button.length).toBe(0)
      })
    })

    describe('after hide button was clicked', () => {
      it('does not display the hide button', () => {
        boxSection.find('button.hide-button').simulate('click')
        const button = boxSection.find('button.hide-button')

        expect(button.length).toBe(0)
      })

      it('does not display the content list', () => {
        boxSection.find('button.hide-button').simulate('click')
        const contents = boxSection.find('.content')

        expect(contents.length).toBe(0)
      })

      it('displays the show button', () => {
        boxSection.find('button.hide-button').simulate('click')
        const button = boxSection.find('button.show-button')

        expect(button.length).toBe(1)
      })
    })
  })

  describe('behavior', () => {
    it('calls props function from parent when button is clecked', () => {
      const button = boxSection.find('button.content-button')

      button.simulate('click')

      expect(buttonFunctionSpy).toHaveBeenCalled()
      expect(buttonFunctionSpy.calls[0].arguments[0]).toBe(contentList)
    })
  })
})
