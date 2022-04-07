import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

export function AddPostForm () {

    const [title,setTitle] = useState('')

    const [content,setContent] = useState('')
    const dispatch = useDispatch()
    const onSaveClicked = () => {
        
            dispatch(postAdded({
                id: nanoid(),
                title,
                content
            }))
            setTitle('')
            setContent('')

    }
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