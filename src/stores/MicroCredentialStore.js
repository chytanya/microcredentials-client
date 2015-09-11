var alt = require('../alt');
var MicroCredentialActions = require('../actions/MicroCredentialActions');

class MicroCredentialStore {

  constructor() {
    this.bindListeners({
      handleUpdateProvider: MicroCredentialActions.UPDATE_DETAILS,
      handleFetchProvider: MicroCredentialActions.FETCH_DETAILS,
      handleProviderFailed: MicroCredentialActions.MICRO_CREDENTIAL_FAILED
    });    this.microCredential = {};
    this.errorMessage = null;
  }

  handleUpdateProvider(microCredential) {
    return this.setState({
      microCredential: microCredential
    });
  }

  handleFetchProvider() {
    this.microCredential = {};
  }

  handleProviderFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(MicroCredentialStore, 'MicroCredentialStore');;
