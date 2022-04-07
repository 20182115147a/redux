import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('posts'))??[];

export const postsSlice = createSlice(
   {
    name:'posts',
    initialState,
    reducers: {
        postAdded (state,action){
            state.push(action.payload)
        },
        postDelete (state,action) {
            state.splice(action.payload,1)
        }
    }
   }
)
export const {postAdded,postDelete} = postsSlice.actions
export default postsSlice.reducer