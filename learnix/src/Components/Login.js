import React from "react";
import "./main.css";
import "./css/Login.css";
import { Link } from "react-router-dom";

import icon from "./img/icon_circle.png";

//Material-ui components
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class Login extends React.Component {
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
      <div className="login">
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
        <Button
          variant="contained"
          className="loginSubmit"
          onClick={this.login.bind(this)}
        >
          Zaloguj
        </Button>
        <Link to={"/register"} className="link">
          Nie masz konta?
        </Link>
      </div>
    );
  }
  login() {
    //DEV
    //TODO: Request to server, getting token and refresh token
    let token = "sample"; //DEV
    let refreshToken = "sample";
    this.props.handle.apply(this.props.that, [token, refreshToken]);
  }
}

export default Login;
