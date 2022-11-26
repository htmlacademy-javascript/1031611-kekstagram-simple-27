import {setUserFormSubmit} from './validate.js';
import {getData} from './api.js';
import {getPhotos} from './miniatures.js';
import {closeUserModal} from './user-modal.js';
import { showAlert } from './until.js';

getData(getPhotos, showAlert);
setUserFormSubmit(closeUserModal);
