/*
    Title: leftDrawer.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import './recipe.css';

const RecipeComponent = ({recipe}) => {
  const {recipeImage, title, subtitle } = recipe
    return (
      <Card style={{ width: '350px', height: '350px', margin: 'auto'}}>
        <CardMedia
          overlay={<CardTitle title={title} subtitle={subtitle} />}
        >
        <img src={recipeImage} alt="" />
        </CardMedia>
      </Card>
    );
}

export default RecipeComponent;
