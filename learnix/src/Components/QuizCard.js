import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Help from "@material-ui/icons/Help";
import PlayArrow from "@material-ui/icons/PlayArrow";

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElem: false,
    };
  }
  toogleMenu(e) {
    this.setState({ anchorElem: this.state.anchorElem ? false : e.target });
  }
  render() {
    return (
      <div className="cardArea">
        <Card className="card">
          <CardActionArea>
            <CardMedia
              image={this.props.imageLink}
              title={this.props.name}
              className="cardImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description || "TODO: Default description"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing className="cardActions">
            <IconButton
              aria-label="Więcej"
              onClick={this.toogleMenu.bind(this)}
            >
              <MoreVertIcon />
            </IconButton>

            <div className="numberOfQuestions">
              <Help />
              <Typography variant="h6">
                {this.props.numberOfQuestions}
              </Typography>
            </div>

            <IconButton aria-label="Graj">
              <PlayArrow />
            </IconButton>
          </CardActions>
          <Menu
            anchorEl={this.state.anchorElem}
            keepMounted
            open={Boolean(this.state.anchorElem)}
          >
            <MenuItem>test</MenuItem>
            <MenuItem>test</MenuItem>
            <MenuItem>test</MenuItem>
          </Menu>
        </Card>
      </div>
    );
  }
}

QuizCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  numberOfQuestions: PropTypes.number.isRequired,
  imageLink: PropTypes.string.isRequired, //Required, because there are default images
};

export default QuizCard;
