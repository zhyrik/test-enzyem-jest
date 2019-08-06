import { combineReducers } from 'redux'

import success from './success'
import reducer from './posts/reducer'

export default  combineReducers({
  success,
  reducer
})