const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const ALERT_TIME = 5000;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '2% 2%';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.borderBottomRightRadius = '10%';
  alertContainer.style.borderBottomLeftRadius = '10%';
  alertContainer.style.backgroundColor = '#cc6600';
  alertContainer.textContent = ALERT_TIME;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_TIME);
};

export {isEscapeKey, isEnterKey, showAlert};
