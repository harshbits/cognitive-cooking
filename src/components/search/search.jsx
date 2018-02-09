/*
    Title: search.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React, {Component} from 'react';
import SearchBar from './SearchBar'
const scrollTo = require('scroll-to');
import './search.css';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height,
          dataSource: []
        };
    }

     handleUpdateInput = (value) => {
       this.setState({
         dataSource: [
           value,
           value + value,
           value + value + value,
         ],
       });
     };

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        const styles={
            findRecipe: {
              cursor: 'pointer',
              color: '#333333',
              fontFamily: 'Andale Mono, monospace',
              fontSize: '55px',
              fontWeight: 'bold',
            }
        };
        return (
          <div>
            <div className="header">
              <span style={styles.findRecipe}>FIND A RECIPE</span>
              <SearchBar />
            </div>
          </div>
        );
      }
}
export default SearchComponent;
