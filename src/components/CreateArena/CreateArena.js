import React, { Component } from "react";
import firebase from "firebase";

class CreateArena extends Component {
  
    state = {
        title: ""
    }

    handleSubmit = event => { 
        event.preventDefault();
        firebase
          .database().ref("/arenas").push({
              title: this.state.title
          })
    
      };
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

  render() {
    return (
      <div className="Arenas">
         <form onSubmit={this.handleSubmit} className="ArenaForm">
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Name your arena"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required={true}
          />

          <button>Create</button>
        </form>
        
      </div>
    )
  }
}

export default CreateArena;
