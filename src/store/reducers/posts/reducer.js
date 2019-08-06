import { types } from '../../actions'


export default (state = [], { type, payload }) => {
  switch (type) {

  case types.GET_POSTS:
    return payload

  default:
    return state
  }
}
