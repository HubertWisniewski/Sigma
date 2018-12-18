import React, { Component } from 'react';

class SignUpForm extends Component {
state = {
    email: "",
    password: "",
    name: "",
    error: null
}




  render() {
    return (
      <div className="SignUpForm">
         <form onSubmit={this.handleSubmit} className="SignUpForm">
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required={true}
          />
          <input
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required={true}
          />
          <input
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
            <button>Sign up</button>          
        </form>
      </div>
      
    );
  }
}

export default SignUpForm;
