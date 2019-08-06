import { types } from '../../actions'
import reducer from './reducer'

describe('posts REDUCER', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('should return new state if reciving type', () => {
    const posts = [{ title: 'test 1'}, { title: 'test 2'}, { title: 'test 3'}]
    const newState = reducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    })
    expect(newState).toEqual(posts)
  })
})