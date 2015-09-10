'use strict';

const API_HOST = 'http://192.168.99.100:18089/api/';
// TODO: abstract to Docker config - port changed because of conflict with full-services-compositions

export default class Api {
  constructor(version='v1'){
    this.basePath = `${API_HOST}${version}/`;
  }
  get(url){
    return new Promise((resolve, reject) => {
      superagent
        .get(`${this.basePath}${url}`)
        .end((error, resp) => {
          if(!! error) {
            reject(error);
          } else {
            resolve(resp.body);
          }
        })
    });
  }
}
