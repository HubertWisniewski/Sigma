import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from '../HomeView/HomeView';
import firebase from 'firebase'

class App extends Component {
  
  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          firebase.database().ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            // let fetchedUser = { uid: user.uid, ...(snapshot.val() || {})}
            this.setState({ user: snapshot.val() || {}})
            // console.log(this.state.user.name)
          })
        }
      })
  }

  

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    return (
      <div className="App">
   
    
      
      <Route
      exact
      path="/"
      component={() => <HomeView user={this.state.user} />}
    />
    </div>
    );
  }
}


export default withRouter(App);
