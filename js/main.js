import {setUserFormSubmit} from './validate.js';
import {getData} from './api.js';
import {photos} from './miniatures.js';
import {closeUserModal} from './user-modal.js';
import { showAlert } from './until.js';

getData(photos, showAlert);
setUserFormSubmit(closeUserModal);
