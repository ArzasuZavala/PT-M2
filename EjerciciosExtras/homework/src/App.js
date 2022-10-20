import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js";
import UserPosts from "./components/UserPosts/UserPosts.js";
import Users from "./components/Users/Users.js";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path={"/"} component={Users} />
      <Route exact path={`/users/:id/posts`} component={UserPosts} />
    </React.Fragment>
  )
}

export default App
