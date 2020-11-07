import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Drawer,
  Button,
} from "@material-ui/core";
import { Search, Menu, AccountCircle, ExitToApp } from "@material-ui/icons/";

import QuizCard from "./QuizCard";
import "./css/Home.css";
import "./css/QuizCard.css"; //We don't want to import it in every card, so we do this once, in the Home component

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      title: "Learnix",
      nickname: "",
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    this.handleResize();
    //DEV
    //TODO: Decode the nickname from the token (this.props.token)
    let nickname = "NAME"; //DEV
    this.setState({ nickname: nickname });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  handleResize() {
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    console.log(vw);
    if (vw < 768) {
      if (this.state.title !== "L") {
        this.setState({ title: "L" });
      }
    } else if (this.state.title !== "Learnix") {
      this.setState({ title: "Learnix" });
    }
  }
  render() {
    return (
      <div className="home">
        <Drawer
          anchor="left"
          open={this.state.isMenuOpen}
          onBackdropClick={this.toogleMenu.bind(this)}
          onEscapeKeyDown={this.toogleMenu.bind(this)}
        >
          <div className="drawerContent">
            <div className="userLogOut">
              <AccountCircle fontSize="large" className="drawerAccount" />
              <Typography className="barText" className="drawerAccount">
                {this.state.nickname}
              </Typography>
              <div className="logOutBtn">
                <Button fullWidth size="large">
                  Wyloguj
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
        <AppBar position="static" className="appBar">
          <Toolbar className="appBarContent">
            <div className="barPart">
              <IconButton edge="start" color="inherit">
                <Menu fontSize="large" onClick={this.toogleMenu.bind(this)} />
              </IconButton>
              <Typography className="barText">{this.state.title}</Typography>
            </div>
            <div className="barPart">
              <InputBase
                placeholder="Szukaj…"
                className="searchInput"
                inputProps={{ "aria-label": "Szukaj" }}
              />
              <IconButton edge="start" color="inherit">
                <Search fontSize="large" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className="cards">
          {/*DEV sample*/}
          <QuizCard
            id="test"
            name="test"
            numberOfQuestions={21}
            imageLink={"https://i.ytimg.com/vi/ivgfEESeBHs/maxresdefault.jpg"}
          />
        </div>
      </div>
    );
  }
  toogleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default Home;
