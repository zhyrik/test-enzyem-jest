
/**
* find component by data-test
* Return ShallowWrapper containing node(s) with the given data-test
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to seacrch
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}




/**
* PropTypes test
* @param {ShallowWrapper} component - Component
* @param {obj} expectedProps - props.
* @returns {undefined} - return undefined || error 
*/
import checkPropTypes from 'check-prop-types'

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
}


/**
* test store
* @param {any} initialState - Component
* @returns {any} - return store with middleware
*/
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './../src/store/reducers'
import { middlewares } from './../src/store'

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}