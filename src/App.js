import React from "react";
import classes from "./App.css";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Posts, AddNewPost, UserProfile } from "./containers";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <section className={classes.App_main}>
        <Switch>
          <Route path="/addPost" component={AddNewPost} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/" exact component={Posts} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
