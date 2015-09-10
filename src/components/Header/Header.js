/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
require('./styles.sass');
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

class Header {

  render() {
    return (
      <nav className="sitenav" id="sitenav">
        <a className="logo" href="/">
          <img src={require('../../public/images/bb_logo.png')} />
        </a>
        <a className="logo-name">Micro-Credentials</a>
        <a className="profile-info">
          profile info here <span className="caret"></span>
        </a>
      </nav>
    );
  }

}

export default Header;
