import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import {SinglePost} from './features/posts/SinglePost'
import {UpdatePostForm} from './features/posts/UpdatePostForm'
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm/>
                <PostsList />
              </React.Fragment>
            )}
            />
            <Route exact path="/posts/:postsId" component={SinglePost}></Route>
            <Route exact path="/editPosts/:postsId" component={UpdatePostForm}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
