import { createSlice } from '@reduxjs/toolkit';
import {nanoid} from'@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('posts'))??[];

export const postsSlice = createSlice(
   {
    name:'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(title,content,userId) {
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId
                        }
                }
            }
        },
        postDelete (state,action) {
            state.splice(action.payload,1)
        },
        postUpdated (state,action) {
            const {id,title,content,userId} = action.payload
            const check = state.find((item) => item.id === id)
            if (check){
                check.title = title;
                check.content = content;
                check.userId = userId;

            }
        }
    }
   }
)
export const {postAdded,postDelete,postUpdated} = postsSlice.actions
export default postsSlice.reducer