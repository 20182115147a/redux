import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { PostAuthor } from './PostAuthor';
export const SinglePost = ({match}) =>{
    const {postsId} = match.params;
    const post = useSelector(state => 
        state.posts.find((post) => post.id === postsId)
    )
    if (!post ) {
        return (
            <h1>No post Fond</h1>
        )
    }
    return (
        <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <PostAuthor userId ={post.userId}/>
        </article>
        <Link to ={`/editPosts/${post.id}`}>Edit Post</Link>
      </section>
  
    )
   
}