var alt = require('../alt');
import MicroCredentialAPI from '../api/MicroCredentialAPI';

let microCredentialAPI = new MicroCredentialAPI();

class MicroCredentialActions {

  fetchDetails(microCredentialId) {
    this.dispatch();
    microCredentialAPI.getDetails(microCredentialId)
      .then((microCredential) => {
        this.actions.updateDetails(microCredential);
      })
      .catch((errorMessage) => {
        this.actions.microCredentialFailed(errorMessage);
      });
  }

  updateDetails(microCredential) {
    this.dispatch(microCredential);
  }

  microCredentialFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(MicroCredentialActions);
