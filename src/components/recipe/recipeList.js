import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Recipe from './recipe'
import './recipe.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const RecipeList = (props) => {
  const {recipeList} = props
  return (
    <div style={{ contain:"size layout", height:10546, overflow: "hidden", pointerEvents: "" }}>
      <div style={{ transform: "translateY(0px)" }}>
        <GridList
          style={styles.gridList}
          cellHeight='auto'
          cols={3}
        >
          {
            recipeList.map((recipe) => (
              <div className='recipe'><Recipe recipe={recipe} /></div>
            ))
          }
        </GridList>
      </div>
    </div>


  )

}
export default RecipeList
