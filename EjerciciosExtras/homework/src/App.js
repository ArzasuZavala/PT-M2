import React from "react";
import { Route } from "react-router-dom";
import CommentsPost from "./components/CommentsPost/CommentsPost.js";

import NavBar from "./components/NavBar/NavBar.js";
import UserPosts from "./components/UserPosts/UserPosts.js";
import Users from "./components/Users/Users.js";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path={"/filter/posts"} component={CommentsPost} />
      <Route exact path={"/"} component={Users} />
      <Route exact path={`/users/:id/posts`} component={UserPosts} />
      <Route path={"/user/:userid/post/:id/coments"} component={UserPosts} />
    </React.Fragment>
  )
}

export default App
