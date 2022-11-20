import {OUTPUT_DATA, INPUT_DATA} from './constants.js';

const getData = (onSuccess, onError) => {
  fetch (INPUT_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch ( OUTPUT_DATA,
    {
      method: 'POST',
      body
    })
    .then((response) => {
      if (response.ok) {
        return onSuccess(true);
      }
      throw new Error();
    })
    .catch(() => {
      onError(false);
    });
};

export { getData, sendData };
