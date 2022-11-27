import {OUTPUT_DATA, INPUT_DATA} from './constants.js';
import { showAlert } from './until.js';

const getData = (onSuccess) => {
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
      showAlert('Ошибка загрузки');
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
