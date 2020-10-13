import React from "react";
import "./main.css";
import "./css/Login.css";

import icon from "./img/icon_circle.png";

//Material-ui components
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      errors: {
        login: "",
        password: "",
      },
    };
  }
  render() {
    return (
      <div className="register">
        <img
          src={icon}
          alt="Logowanie"
          width={180}
          height={180}
          className="iconImg"
        />
        <TextField
          variant="filled"
          label="Login"
          className="loginInput"
          value={this.state.login}
          onChange={(e) => {
            this.setState({ login: e.target.value });
          }}
          error={this.state.errors.login}
          helperText={this.state.errors.login}
        />
        <TextField
          variant="filled"
          label="Hasło"
          className="loginInput"
          type="password"
          value={this.state.password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          error={this.state.errors.password}
          helperText={this.state.errors.password}
        />
        <Button variant="contained" className="loginSubmit">
          Zarejestruj
        </Button>
      </div>
    );
  }
}

export default Register;
