import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../utils'
import Button from './index'

describe('Button compoenent', () => {
  describe('checking PropTypes', () => {
    test('should NOT throw a warning', () => {
      const expectedProps = {
        test: 'test',
        emitEvent: () => {

        }
      }
      const warning = checkProps(Button, expectedProps)
      expect(warning).toBeUndefined()
    })

    describe('rendders', () => {

      let wrapper
      beforeEach(() => {
        const props = {
          text: 'test'
        }
        wrapper = shallow(<Button {...props}/>)
      })

      it('should render button', () => {
        const compoenent = findByTestAttr(wrapper, 'button')
        expect(compoenent.length).toBe(1)
      })
    })
  })
})
