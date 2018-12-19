import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import firebase from "firebase";
import ArenaView from "../ArenaView/ArenaView";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            // let fetchedUser = { uid: user.uid, ...(snapshot.val() || {})}
            this.setState({ user: snapshot.val() || {} });
            // console.log(this.state.user.name)
          });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <div className="Navigation">
        <ul>
          <li>
            <NavLink to="/">
            Home  
            </NavLink>
            <NavLink to="/arena">
            Arena
            </NavLink>
          </li>
        </ul>
        
        </div>


        <Route
          exact
          path="/"
          component={() => <HomeView user={this.state.user} />}
        />
        <Route exact 
        path="/arena"
        component={() => <ArenaView/>}
        />
      </div>
    );
  }
}

export default withRouter(App);
