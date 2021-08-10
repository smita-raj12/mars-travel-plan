export class MarsCuriosityService {  
  static getCuriosityPhoto() {
    return fetch  (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
        return response.json();
      })
      .catch(function(error) {
        return error;
    });
  }
}

export  class MarsOpportunityService {  
  static getOpportunityPhoto() {
    return fetch  (`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
        return response.json();
      })
      .catch(function(error) {
        return error;
    });
  }
}