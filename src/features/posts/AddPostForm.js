import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

export function AddPostForm () {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const onSaveClicked = () => {
        
            dispatch(postAdded(title,content,userId))
            setTitle('')
            setContent('')

    }
    const usersOptions  =  users.map(user => 
        <option key = {user.id} value = {user.id}>{user.name}</option>
      )
    return (
        <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange ={e => setTitle(e.target.value)}
          />
           <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange = {(e) => setUserId(e.target.value)}>
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
                     id="postContent"
                     name="postContent"
                     value = {content}
                     onChange = {e => setContent(e.target.value)}
          />
          <button type="button" onClick = {onSaveClicked}>Save Post</button>
        </form>
      </section>
    )
}