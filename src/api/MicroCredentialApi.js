class MicroCredentialAPI {

  getDetails(microCredentialId) {
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
      let url = 'http://mc-local.bloomboard.com:18081/api/v1/micro_credentials/' + microCredentialId + '.json';
      xhr.open('GET', url);
      xhr.send();
    });
  }
}

export default MicroCredentialAPI;
