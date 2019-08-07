import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, testStore } from '../utils'
import App from './App'

// with STATE
const setup = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive() // for REDUX connect !!!!!!!!!!!
  return wrapper;
}

describe('App component', () => {
  
  let wrapper
  beforeEach(() => {
    const initialState = {
      reducer: [{
          title: 'Example title 1',
          desc: 'Some text'
      }, {
          title: 'Example title 2',
          desc: 'Some text'
      }, {
          title: 'Example title 3',
          desc: 'Some text'
      }]
    }
    wrapper = setup(initialState)
  })

  test('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'app')
    expect(component.length).toBe(1)
  })

  // check METHOD (change state)
  test('updateState() method should update state', () => {
    const classInstance = wrapper.instance()
    classInstance.updateState() // RUN METHOD
    const newState = classInstance.state.hideButton // get state: {hidebutton: true}
    expect(newState).toBe(true)
  })

  // check METHOD (return)
  test('exampleMethod() method should return right number', () => {
    const classInstance = wrapper.instance()
    const newValue = classInstance.exampleMethod(10)
    expect(newValue).toBe(11)
  })

})