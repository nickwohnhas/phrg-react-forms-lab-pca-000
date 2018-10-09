import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: '',
    };
  }
  handleInputChange = event => {
  const { name, value } = event.target;
  console.log(name);
  this.setState({
    [name]: value,
  });
};
  handleChange = event => {
   this.setState({
     password: event.target.value,
     username: event.target.value,
   });
 }
 handleFormSubmit = event => {
     event.preventDefault();
     const { username, password } = this.state;

     if (!username || !password) {
       return;
     }

     this.props.onSubmit({ username, password });
   };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
            value={this.state.username}

            name="username" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password"
            value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleFormSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
