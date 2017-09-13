import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'

import InputSection from '../../../src/js/Top/InputSection'

describe('InputSection', () => {
  afterEach(() => expect.restoreSpies())

  describe('display', () => {
    let inputSection
    beforeEach(() => {
      inputSection = shallow(
        <InputSection
          pushWasClicked={() => {}}
          enqueueWasClicked={() => {}}
        />
      )
    })

    it('displays the title', () => {
      const title = inputSection.find('.title')
      expect(title.length).toBe(1)
      expect(title.text()).toBe('input')
    })

    it('displays the input box', () => {
      const title = inputSection.find('input.input')
      expect(title.length).toBe(1)
    })

    it('displays the button of push', () => {
      const pushButton = inputSection.find('button.push')
      expect(pushButton.length).toBe(1)
      expect(pushButton.text()).toBe('push')
    })

    it('displays the button of enqueue', () => {
      const enqueueButton = inputSection.find('button.enqueue')
      expect(enqueueButton.length).toBe(1)
      expect(enqueueButton.text()).toBe('enqueue')
    })
  })

  describe('behavior', () => {
    let inputSection, pushButtonSpy, enqueueButtonSpy
    beforeEach(() => {
      pushButtonSpy = expect.createSpy()
      enqueueButtonSpy = expect.createSpy()

      inputSection = mount(
        <InputSection
          pushWasClicked={pushButtonSpy}
          enqueueWasClicked={enqueueButtonSpy}
        />
      )
    })

    it('calls pushButtonSpy when push button is clicked', () => {
      const fakeEvent = {
        target: {
          value: 'test push'
        }
      }
      inputSection.instance().handleInput(fakeEvent)
      const pushButton = inputSection.find('button.push')
      pushButton.simulate('click')

      const expectedContent = {
        name: 'test push'
      }
      expect(pushButtonSpy).toHaveBeenCalled()
      expect(pushButtonSpy.calls[0].arguments[0]).toEqual(expectedContent)
    })

    it('calls enququButtonSpy when enqueue button is clicked', () => {
      const fakeEvent = {
        target: {
          value: 'test enqueue'
        }
      }
      inputSection.instance().handleInput(fakeEvent)
      const enqueueButton = inputSection.find('button.enqueue')
      enqueueButton.simulate('click')

      const expectedContent = {
        name: 'test enqueue'
      }
      expect(enqueueButtonSpy).toHaveBeenCalled()
      expect(enqueueButtonSpy.calls[0].arguments[0]).toEqual(expectedContent)
    })
  })
})
