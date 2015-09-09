import React, { Component,  PropTypes } from 'react';
require('./styles.sass');
import Header from '../../Header';

import connectToStores from 'alt/utils/connectToStores';
var TodoStore = require('../../../stores/TodoStore');
var TodoActions =  require('../../../actions/TodoActions');

// var MicroCredentialStore = require('../../../stores/MicroCredentialStore');
// var MicroCredentialActions =  require('../../../actions/MicroCredentialActions');

var ProviderStore = require('../../../stores/ProviderStore');
var ProviderActions =  require('../../../actions/ProviderActions');

@connectToStores

class Home extends Component{

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  static getStores() {
    return [ProviderStore];
  }

  static getPropsFromStores() {
    return ProviderStore.getState();
  }

  componentDidMount () {
    ProviderActions.fetchProvider();
  }

  onChange () {
    this.setState(ProviderStore.getState());
  }

  componentWillMount() {
    const stores = [ProviderStore]
    stores.forEach(store => store.listen(this.onChange))
  }

  render() {

    let providerMeta = {'name': this.state && this.state.provider ? this.state.provider.name : '' };
    
    if(!providerMeta.name){
      return (
        <div className="loading">Loading..</div>
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
        </section>
      </div>
    );
  }

}

export default Home;
