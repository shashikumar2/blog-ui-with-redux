import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' // npm install react-redux
import configureStore from './store/configureStore'
import {startGetPosts} from './actions/postsAction'
import {startGetUsers} from './actions/usersAction'
import {startGetComments} from './actions/commentsAction'
// import { increment, decrement } from './actions/countAction'
const store = configureStore() 
//console.log(store.getState())

store.subscribe(() => {
    console.log('index',store.getState())
})


// handle page reloads 
store.dispatch(startGetPosts())
store.dispatch(startGetUsers())
store.dispatch(startGetComments())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )
