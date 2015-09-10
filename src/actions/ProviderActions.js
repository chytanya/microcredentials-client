var alt = require('../alt');
import ProviderAPI from '../api/ProviderAPI';

import pluck from 'lodash/collection/pluck';
import each from 'lodash/collection/each';

let providerAPI = new ProviderAPI();

class ProviderActions {

  fetchProvider(providerId) {
    this.dispatch();
    providerAPI.getDetails(providerId)
      .then((provider) => {
        this.actions.updateProvider(provider);
      })
      .catch((errorMessage) => {
        this.actions.providerFailed(errorMessage);
      });
  }

  updateProvider(provider) {
    this.dispatch(provider);
  }

  providerFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(ProviderActions);
