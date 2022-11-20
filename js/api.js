const INPUT_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const OUTPUT_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';


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
