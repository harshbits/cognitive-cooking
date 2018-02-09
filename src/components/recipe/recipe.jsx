/*
    Title: leftDrawer.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './recipe.css';

class RecipeComponent extends Component {

    render() {
      return (
        <div>
          <Card style ={{ width: '300px', height: '300px', margin: 'auto'}}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="/images/dark-wood.png"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src="/images/recipes/biryani.jpg" alt="" />
            </CardMedia>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      );
  }
}

export default RecipeComponent;
