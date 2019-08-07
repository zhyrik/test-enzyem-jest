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
      let mockFunk //for click
      beforeEach(() => {
        mockFunk = jest.fn() // for click
        const props = {
          text: 'test',
          emitEvent: mockFunk
        }
        wrapper = shallow(<Button {...props}/>)
      })

      it('should render button', () => {
        const compoenent = findByTestAttr(wrapper, 'button')
        expect(compoenent.length).toBe(1)
      })

      // test Button click
      it('Should emit callback on click event', () => {
        const button = findByTestAttr(wrapper, 'button');
        button.simulate('click');
        const callback = mockFunk.mock.calls.length;
        expect(callback).toBe(1);
      })

    })
  })
})
