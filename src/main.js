const BASE_URL = 'https://energyflow.b.goit.study/api';

function baseRequest(filter) {
  axios.defaults.baseURL = BASE_URL;

  axios
    .get('/filters/', {
      params: {
        limit: 12,
        filter: filter,
      },
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err.message);
    });
}
baseRequest('Equipment');

function getExercises(name) {
  axios.defaults.baseURL = BASE_URL;

  axios
    .get('/exercises/', {
      params: {
        limit: 12,
      },
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.message);
    });
}
getExercises();

import './js/mobile-menu-function';

