import {setUserFormSubmit} from './validate.js';
import {getData} from './api.js';
import {photos} from './miniatures.js';
import {closeUserModal} from './user-modal.js';

getData((pictures) => {
  photos(pictures);
});

setUserFormSubmit(closeUserModal);
