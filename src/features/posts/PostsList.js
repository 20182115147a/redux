import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { postDelete } from './postsSlice'
export function PostsList (){
    const posts = useSelector(state => state.posts)
    const jsonPosts = JSON.stringify(posts)
    localStorage.setItem('posts',jsonPosts)
    const dispatch = useDispatch()
    
    const renderPosts = posts.map((post,index) => (
        <article className="post-excerpt" key={post.id} id ={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)} <span style={{marginLeft:200} } id={index} onClick = {()=> {
                dispatch(postDelete(index))
            }}>&times;</span></p>
        </article>
    ))
    return (
        <section className="post-list">
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}