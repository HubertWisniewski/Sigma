import React, { Component } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import firebase from "firebase";
import "./Auth.css";

class Auth extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ user }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return this.state.user === null ? (
      <div className="Auth">
        <>
          <SignUpForm />
        </>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default Auth;
