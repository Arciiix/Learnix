import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

//Componenets
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#347aeb",
        },
      },
    });
    this.state = {
      isLogged: false,
      token: "",
      refreshToken: "",
    };
  }
  componentDidMount() {
    this.setState({ isLogged: this.isLogged() });
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <CssBaseline />
        <div className="App">
          <Router>
            <Switch>
              <Route path="/register" component={Register} />
              <Route
                exact
                path="/"
                render={
                  this.state.isLogged
                    ? () => <Home />
                    : () => (
                        <Login
                          that={this}
                          handle={(token, refreshToken) => {
                            this.handleLogin(token, refreshToken);
                          }}
                        />
                      )
                }
              />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
  handleLogin(token, refreshToken) {
    //After client receives a token from the server, so he's logged correctly, redirect to the home page
    if (!token || !refreshToken) {
      return console.error(`Didn't receive the token`);
    }
    //DEV
    //Check the token validity
    this.setState({ isLogged: true, token: token, refreshToken: refreshToken });
    localStorage.setItem("refreshToken", refreshToken);
  }
  isLogged() {
    let refreshToken = localStorage.getItem("refreshToken");
    console.log(refreshToken);
    if (refreshToken) {
      //DEV
      //TODO: get the new token
      this.setState({ isLogged: true });
      return true;
    }
    return false;
  }
}

export default App;
