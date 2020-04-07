import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class UserShow extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.user ? ( <div> 
                        <h2>User Show - {this.props.match.params.id}</h2>
                        <h2> Posts Written by user</h2>
                        <ul>
                            {this.props.userPosts.map(post => {
                              return <li key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                           })}
                         </ul>
                    </div> ) : (
                        <p> loading....</p>
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        userPosts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)