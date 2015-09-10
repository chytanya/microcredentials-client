var alt = require('../alt');
var ProviderActions = require('../actions/ProviderActions');

import pluck from 'lodash/collection/pluck';
import each from 'lodash/collection/each';

class ProviderStore {

  constructor() {
    this.bindListeners({
      handleUpdateProvider: ProviderActions.UPDATE_PROVIDER,
      handleFetchProvider: ProviderActions.FETCH_PROVIDER,
      handleProviderFailed: ProviderActions.PROVIDER_FAILED
    });
    this.state = {
      provider: null
    };
    this.errorMessage = null;
  }

  handleUpdateProvider(provider) {
    let groups = pluck(provider.microCredentials, 'group');
    let microCredentialGroups = {};
    each(groups, function(group) {
      let groupId = group.id.toString();
      if (!microCredentialGroups[groupId]) {
        microCredentialGroups[groupId] = group;
        microCredentialGroups[groupId].microCredentials = {};
      }
      each(provider.microCredentials, function(mc) {
        if (mc.group.id.toString() === groupId) {
          microCredentialGroups[groupId].microCredentials[mc.id] = mc;
        }
      });
    });
    provider.microCredentialGroups = microCredentialGroups;

    this.setState({
      provider: provider
    });
  }

  handleFetchProvider() {
    this.provider = {};
  }

  handleProviderFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(ProviderStore, 'ProviderStore');;
