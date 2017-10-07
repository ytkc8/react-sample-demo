import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import SingleSelectDropdown from '../../../src/js/Top/SingleSelectDropdown'

describe.only('SingleSelectDropdown', () => {
  describe('display', () => {
    let singleSelect
    beforeEach(() => {
      singleSelect = shallow(<SingleSelectDropdown/>)
    })

    it('displays input box', () => {
      const input = singleSelect.find('input.input-box')
      expect(input.length).toBe(1)
    })

    it('displays clear button', () => {
      const button = singleSelect.find('button.clear')
      expect(button.length).toBe(1)
      expect(button.text()).toBe('×')
    })

    it('does not display options by default', () => {
      const options = singleSelect.find('.option')
      expect(options.length).toBe(0)
    })
  })

  describe('changing input value', () => {
    const options = [
      {value: 'aaa'},
      {value: 'abc'},
      {value: 'ccc'}
    ]

    let singleSelect, input
    beforeEach(() => {
      singleSelect = shallow(<SingleSelectDropdown options={options}/>)
      input = singleSelect.find('input.input-box')

      const event = {target: {value: 'test'}}
      input.simulate('change', event)
    })

    it('hides all options when inputted value is not match', () => {
      const options = singleSelect.find('.option')
      expect(options.length).toBe(0)
    })

    it('hides all options when inputted value is empty', () => {
      const event = {target: {value: ''}}
      input.simulate('change', event)

      const options = singleSelect.find('.option')
      expect(options.length).toBe(0)
    })

    it('displays some options when inputted value is "a"', () => {
      const event = {target: {value: 'a'}}
      input.simulate('change', event)

      const options = singleSelect.find('.option')
      expect(options.length).toBe(2)
      expect(options.at(0).text()).toBe('aaa')
      expect(options.at(1).text()).toBe('abc')
    })

    it('displays a option when inputted value is "c"', () => {
      const event = {target: {value: 'c'}}
      input.simulate('change', event)

      const options = singleSelect.find('.option')
      expect(options.length).toBe(2)
      expect(options.at(0).text()).toBe('abc')
      expect(options.at(1).text()).toBe('ccc')
    })

    it('displays a option when inputted value is "bc"', () => {
      const event = {target: {value: 'bc'}}
      input.simulate('change', event)

      const options = singleSelect.find('.option')
      expect(options.length).toBe(1)
      expect(options.at(0).text()).toBe('abc')
    })
  })

  describe('clear button', () => {
    let singleSelect
    beforeEach(() => {
      singleSelect = shallow(<SingleSelectDropdown options={[]}/>)
      const input = singleSelect.find('input.input-box')

      const event = {target: {value: 'aaa'}}
      input.simulate('change', event)
    })

    it('clear value in input box when clicked', () => {
      const updatedInput = singleSelect.find('input.input-box')
      expect(updatedInput.props().value).toBe('aaa')

      const button = singleSelect.find('button.clear')
      button.simulate('click')

      const clearedInput = singleSelect.find('input.input-box')
      expect(clearedInput.props().value).toBe('')
    })
  })

  describe('selecting option', () => {
    const options = [
      {value: 'aaa'},
      {value: 'abc'}
    ]

    let singleSelect
    beforeEach(() => {
      singleSelect = shallow(<SingleSelectDropdown options={options}/>)
      const input = singleSelect.find('input.input-box')

      const event = {target: {value: 'a'}}
      input.simulate('change', event)

      const option = singleSelect.find('.option').at(0)

      const clickEvent = {target: {value: 'aaa'}}
      option.simulate('click', clickEvent)
    })

    it('displays selected value in input box', () => {
      const updatedInput = singleSelect.find('input.input-box')
      expect(updatedInput.props().value).toBe('aaa')
    })
  })

  describe('clicking outside', () => {
    const options = [
      {value: 'aaa'},
      {value: 'abc'}
    ]

    let singleSelect, addEventListenerSpy, removeEventListenerSpy, handleOutsideClick
    beforeEach(() => {
      addEventListenerSpy = expect.spyOn(global.document, 'addEventListener')
      removeEventListenerSpy = expect.spyOn(global.document, 'removeEventListener')
      singleSelect = shallow(<SingleSelectDropdown options={options}/>)
      handleOutsideClick = singleSelect.instance().handleOutsideClick
    })

    it('adds handleOutsideClick click handler to global document on mount', () => {
      expect(addEventListenerSpy).toHaveBeenCalled()
      expect(addEventListenerSpy.calls[0].arguments[0]).toEqual('click')
      expect(addEventListenerSpy.calls[0].arguments[1]).toEqual(handleOutsideClick)
    })

    it('removes handleOutsideClick click handler from global document on unmount', () => {
      singleSelect.unmount()

      expect(removeEventListenerSpy).toHaveBeenCalled()
      expect(removeEventListenerSpy.calls[0].arguments[0]).toEqual('click')
      expect(removeEventListenerSpy.calls[0].arguments[1]).toEqual(handleOutsideClick)
    })

    it('makes options hidden when anything else is clicked while options is visible', () => {
      const input = singleSelect.find('input.input-box')
      const event = {target: {value: 'aa'}}
      input.simulate('change', event)

      expect(singleSelect.find('.option').length).toBe(1)

      handleOutsideClick({target: {className: 'not-select-button'}})

      expect(singleSelect.find('.option').length).toBe(0)
    })
  })
})
