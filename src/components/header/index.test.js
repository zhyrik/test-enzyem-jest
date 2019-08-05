import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

describe('Header component', () => {
  it('it should render without errors', () => {
    expect(1).toBe(1) 
  })
  it('header render without errors', () => {
    const component = shallow(<Header />)
    const wrapper = component.find('.header')
    expect(wrapper.length).toBe(1)
  })
  it('should render logo', () => {
    const component = shallow(<Header />)
    const logo = component.find('.logo')
    expect(logo.length).toBe(1)
  })
})



const setup = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

describe('Header component variant TWO', () => {

  let component
  beforeEach(() => {
    component = setup()
  })

  it('header render without errors', () => {
    const wrapper = findByTestAttr(component, 'header')
    expect(wrapper.length).toBe(1)
  })
  it('should render logo', () => {
    const logo = findByTestAttr(component, 'logo')
    expect(logo.length).toBe(1)
  })
})