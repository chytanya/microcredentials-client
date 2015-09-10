import Api from './base';

let api = new Api();

class ProviderAPI {
  getDetails(microCredentialId) {
    return api.get(`micro_credentials/${microCredentialId}.json`);
  }
}

export default ProviderAPI;
