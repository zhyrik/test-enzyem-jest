import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'
import { findByTestAttr, checkProps } from '../../../utils'

const setup = (props={}) => {
  const component = shallow(<Header {...props}/>)
  return component
}

describe('Hedline component', () => {

  // PropTypes
  describe('check PropTypes', () => {
    test('should not trow warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: false
        }]
      }

      const propsError = checkProps(Header, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  // class component with props
  describe('have props', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        header: 'test',
        desc: 'test'
      }
      wrapper = setup(props)
    })

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headline')
      console.log(component.html())
      expect(component.length).toBe(1)
    })
    it('shoud render h1', () => {
      const h1 = findByTestAttr(wrapper, 'head')
      expect(h1.length).toBe(1)
    })
    it('should render description', () => {
      const desc = findByTestAttr(wrapper, 'desc')
      expect(desc.length).toBe(1)
    })
 
  })

  // class component WITHOUT PROPS (return null)
  describe('have NO props', () => {

    let wrapper
    beforeEach(() => {
      wrapper = setup()
    })

    it('should NO render hedline', () => {
      const component = findByTestAttr(wrapper, 'headline')
      expect(component.length).toBe(0)
    })

  })
})