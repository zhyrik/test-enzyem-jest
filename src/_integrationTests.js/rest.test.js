import moxios from 'moxios'
import { testStore } from './../../utils'
import { fetchPost } from './../store/actions/posts'

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('Store is updated correctly', () => {

        const expectedState = [{
            title: 'Example title 1',
            desc: 'Some Text'
        },{
            title: 'Example title 2',
            desc: 'Some Text'
        },{
            title: 'Example title 3',
            desc: 'Some Text'
        }]
        const store = testStore()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPost())
        .then(() => {
            const newState = store.getState()
            expect(newState.reducer).toBe(expectedState)
        })
        
    })

})