import React, { Component,  PropTypes } from 'react';
import Header from '../Header';
import connectToStores from 'alt/utils/connectToStores';

var ProviderStore = require('../../stores/ProviderStore');
var ProviderActions =  require('../../actions/ProviderActions');

import styles from './styles.sass';

var MicroCredentialsList = require('./components/MicroCredentialList');

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

  componentDidMount() {
    [ProviderStore].forEach(store => store.listen(this.onChange));
  }

  componentWillMount() {
    ProviderActions.fetchProvider(1);
  }

  componentWillUnmount() {
    [ProviderStore].forEach(store => store.unlisten(this.onChange));
  }

  onChange () {
    this.setState(ProviderStore.getState());
  }

  render() {

    let styles1 = {
      opacity: '1',
      transform: 'translate3d(0px, 0px, 0px)'
    };

    let styles2 = {
      backgroundImage: 'url(http://api.randomuser.me/portraits/thumb/women/43.jpg)'
    };

    return (
      <If condition={this.state && this.state.provider}>
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
            <MicroCredentialsList provider={this.state.provider} microCredentialGroups={this.state.provider.microCredentialGroups} />
          </section>
        </div>
      <Else/>
        <div className="loading">Loading..</div>
      </If>
    );
  }

}

export default Home;
