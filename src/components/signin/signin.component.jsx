import React from "react";
import "./signin.style.css";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passowrd: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", passowrd: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label> Email</label>
          <input
            type="password"
            value={this.state.passowrd}
            onChange={this.handleChange}
          />
          <label> Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
