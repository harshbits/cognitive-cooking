/*
    Title: Home.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './Home.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class Home extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="Home">
              <BrowserDetectComponent></BrowserDetectComponent>
              <ProgressComponent></ProgressComponent>
              <div className="section header-section">
                <div className="section-container header-component">
                  <HeaderComponent></HeaderComponent>
                </div>
              </div>
              <div className="section">
                <div className="section-container">
                  <ContactComponent></ContactComponent>
                </div>
              </div>
              <div className="section colored">
                <div className="section-container footer-component">
                  <FooterComponent></FooterComponent>
                </div>
              </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default Home;
