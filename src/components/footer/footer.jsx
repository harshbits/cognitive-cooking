/*
    Title: footer.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          &copy;2018 Cognitive Cooking® - All rights reserved
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>

      </div>
    );
  }
}

export default FooterComponent;
