//placing the api key on .env file or localStorage is not secure anyway, so no point doing that.
//if we want a secure way to store the api key, best way(not buletproof also)
//is to make a middleware between the client and the api, like node server or one of the service that amazon/firebase/etc are offering
export const API_KEY = '26e9382884c83cb85bf6760c490ac6bf';

export const BASE_URL = 'http://api.mediastack.com/v1/';
