
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {postUpdated} from './postsSlice'
import { useHistory } from 'react-router-dom'
export function UpdatePostForm({match}) {
    const {postsId} = match.params
    const dispatch = useDispatch();
    const history = useHistory()
    const users = useSelector(state => state.users)
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')
    const onSaveClicked = () => {
        dispatch(postUpdated({id:postsId,title,content,userId}))
        history.push(`/posts/${postsId}`)
    }
    const usersOptions = users.map(user =>(
        <option key = {user.id} value = {user.id}>
          {user.name}
        </option>
    ))
    return (
        <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange = {(e) => setTitle(e.target.value)}
          value = {title}
          placeholder="What's on your mind?"
     
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange = {(e) => setContent(e.target.value)}
          value ={content}
        />
        <select id="postAuthor" value={userId} onChange = {(e) => setUserId(e.target.value)}>
            <option value="">New Author</option>
            {usersOptions}
        </select>
      </form>
      <button type="button" onClick ={onSaveClicked}>
        Save Post
      </button>
    </section>

    )

}