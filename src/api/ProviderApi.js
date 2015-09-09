class ProviderAPI {

  getDetails() {
    return new Promise(function(resolve) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          }
          else {
            console.log('error on api call');
          }
        }
      };
      let url = 'http://mc-local.bloomboard.com:18081/api/v1/mc_providers/1/micro_credentials.json';
      xhr.open('GET', url);
      xhr.send();
    });
  }
}

export default ProviderAPI;
