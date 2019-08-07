import axios from 'axios'

import { types } from '.'

export const fetchPost = () => async dispatch => {
  await axios.get('http://localhost:3004/posts')
    .then(res => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data
      })
    })
    .catch(err => {
        console.log(err)
      }
    )
}

