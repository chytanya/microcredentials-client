import React, { Component,  PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';

// var ProviderStore = require('../../stores/ProviderStore');
// var ProviderActions =  require('../../actions/ProviderActions');

import styles from './styles.sass';

// @connectToStores
class Profile extends Component{

  constructor(props) {
    super(props)
    // this.onChange = this.onChange.bind(this)
  }

  // static getStores() {
  //   return [ProviderStore];
  // }
  //
  // static getPropsFromStores() {
  //   return ProviderStore.getState();
  // }

  // componentDidMount() {
  //   [ProviderStore].forEach(store => store.listen(this.onChange));
  // }
  //
  // componentWillMount() {
  //   ProviderActions.fetchProvider(1);
  // }
  //
  // componentWillUnmount() {
  //   [ProviderStore].forEach(store => store.unlisten(this.onChange));
  // }
  //
  // onChange () {
  //   this.setState(ProviderStore.getState());
  // }

  render() {

    return (
      <If condition={this.state}>
        <div>
          <section className="profile-page">
            <h1>Profile</h1>
          </section>
        </div>
      <Else/>
        <div className="loading">Loading..</div>
      </If>
    );
  }

}

export default Profile;
