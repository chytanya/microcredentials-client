import React, { PropTypes } from 'react';
require('./styles.sass');
import Header from '../../Header';

class Home {

  static propTypes = {
  };

  render() {
    let provider = {'name': this.state && this.state.provider ? this.state.provider.name : '' };

    if(provider.name){
      return (
        <div class="loading">Loading..</div>
      );
    }

    let styles1 = {
      opacity: '1',
      transform: 'translate3d(0px, 0px, 0px)'
    };

    let styles2 = {
      backgroundImage: 'url(http://api.randomuser.me/portraits/thumb/women/43.jpg)'
    };

    return (
      <div>
        <header className="mc-banner">
          <div className="mc-banner-overlay">
            <div className="contain" style={styles1}>
              <div className="mc-banner-title"></div>
              <div className="mc-banner-host">
                Micro-Credentials, powered by: <span className="mc-banner-host-name">BloomBoard</span>
              </div>
              <div className="mc-banner-description">
                Some awesome text about Digital Promise and the trend to competency based micro-credentialing.
              </div>
            </div>
          </div>
        </header>
        <section className="micro-credentials-page">
            Micro credentials here
        </section>
      </div>
    );
  }

}

export default Home;
