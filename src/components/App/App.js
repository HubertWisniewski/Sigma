import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import firebase from "firebase";
import ArenasView from "../ArenasView/ArenasView";
import ArenaView from "../ArenaView/ArenaView";

class App extends Component {
  state = {
    user: null,
    arenas: []
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

    firebase
      .database()
      .ref("/arenas")
      .on("value", snapshot => {
        const value = snapshot.val();
        const arenas = Object.entries(value || {}).map(([key, val]) => ({
          id: key,
          ...val
        }));
        this.setState({ arenas });
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/arena">Arena</NavLink>
            </li>
          </ul>
        </div>

        <Route
          exact
          path="/arena/:arenaId"
          component={({
            match: {
              params: { arenaId }
            }
          }) => (
            <ArenaView
              arenas={this.state.arenas}
              arenaId={arenaId}
            />
          )}
        />
        <Route
          exact
          path="/"
          component={() => <HomeView user={this.state.user} />}
        />
        <Route
          exact
          path="/arena"
          component={() => <ArenasView arenas={this.state.arenas} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
