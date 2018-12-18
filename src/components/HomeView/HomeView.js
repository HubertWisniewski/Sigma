import React, { Component } from 'react';
import firebase from 'firebase'


class HomeView extends Component {




    
logOut = () => {
    firebase.auth().signOut()
}

  render() {
    return (
      <div className="App">
     <h1>Siema {this.props.user === null ? "" : this.props.user.name }</h1>
        <button onClick={() => this.logOut()}>Sign Out</button>
      
    </div>
    );
  }
}


export default HomeView;
