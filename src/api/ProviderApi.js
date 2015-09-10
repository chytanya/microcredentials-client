import Api from './base';

let api = new Api();

class ProviderAPI {
  getDetails(providerId) {
    return api.get(`mc_providers/${providerId}/micro_credentials.json`);
  }
}

export default ProviderAPI;
