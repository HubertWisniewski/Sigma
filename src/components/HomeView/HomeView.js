import React, { Component } from 'react';
import firebase from 'firebase'


class HomeView extends Component {


componentDidMount() {
    this.showMe()
}

    showMe = () => {
        console.log(this.props.user)
    }


  render() {
    return (
      <div className="App">
     <h1>Coś</h1>
        <button onClick={() => firebase.auth().signOut}>Sign Out</button>
      
    </div>
    );
  }
}


export default HomeView;
