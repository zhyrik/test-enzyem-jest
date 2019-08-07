import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../../utils'
import List from '.'

describe('List component', () => {

  describe('check prop List component', () => {
    test('should NOT throw a warning', () => {
      const props = {
        title: 'test',
        desc: 'some text'
      }
      const warning = checkProps(List, props)
      expect(warning).toBeUndefined()
    })
  })

  describe('List component RENDERS', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        title: 'test',
        desc: 'some text'
      }
      wrapper = shallow(<List {...props} />)
    })

    test('should render without error', () => {
      const component = findByTestAttr(wrapper, 'ListWrapper')
      expect(component.length).toBe(1)
    })

    test('should render title component', () => {
      const component = findByTestAttr(wrapper, 'title')
      expect(component.length).toBe(1)
    })

    test('should render description component', () => {
      const component = findByTestAttr(wrapper, 'desc')
      expect(component.length).toBe(1)
    })

  })

  describe('should NOT render', () => {

    let wrapper
    beforeEach(() => {
      wrapper = shallow(<List />)
    })

    test('component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'List')
      expect(component.length).toBe(0)
    })

  })

})