import axios from 'axios'
// sync
export const setPosts = (posts) => {
    return { type: 'SET_POSTS', payload: posts}
}

// async 
export const startGetPosts = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data)
                const posts = response.data 
                dispatch(setPosts(posts))
            })
    }
}