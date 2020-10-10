import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

//Componenets
import Login from "./Components/Login";
import Register from "./Components/Register";
let Home = ""; //DEV
//import Home from './Components/Home'

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
    };
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <CssBaseline />
        <div className="App">
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route
                exact
                path="/"
                component={this.state.isLogged ? Home : Login}
              />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
