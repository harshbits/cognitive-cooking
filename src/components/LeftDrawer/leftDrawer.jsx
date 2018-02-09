/*
    Title: leftDrawer.jsx
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import './leftDrawer.css';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class LeftDrawer extends Component {

    render() {
      const styles={
        title: {
          cursor: 'pointer',
          color: '#333333',
          fontFamily: 'Trattatello, fantasy',
          fontWeight: 'bold',
          fontSize: '30px',
        },
        menuItem: {
          color: '#333333',
          fontFamily: 'Andale Mono, monospace',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
        }
      };

    return (
      <div>
        <Drawer
          width={300}
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleClose()}
          >
          <div className="section drawer"
            style={{background: 'url(/images/brick-wall.png)', color: 'white'}}>
            <Menu menuItemStyle={styles.menuItem}>
              <MenuItem primaryText="ASK EUNICE"  />
              <MenuItem primaryText="RECIPES" />
              <MenuItem primaryText="RECIPE TIPS" />
              <MenuItem primaryText="RESTAURANTS"  />
            </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
