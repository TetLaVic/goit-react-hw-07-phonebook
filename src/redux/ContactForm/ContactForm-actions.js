// import types from './ContactForm-types';
import { v4 as genId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number, id }) => {
//   return {
//     type: types.ADD_CONTACT,
//     payload: { name, number, id: genId() },
//   };
// };

const addContact = createAction(
  'ContactForm/AddContact',
  ({ name, number }) => {
    return { payload: { name, number, id: genId() } };
  },
);

// const deleteContact = contactId => {
//   return { type: types.DELETE_CONTACT, payload: contactId };
// };

const deleteContact = createAction('ContactForm/DeleteContact');

// const filterChange = value => {
//   return {
//     type: types.FILTER_CHANGE,
//     payload: value,
//   };
// };

const filterChange = createAction('ContactForm/FilterChange');

export default { addContact, deleteContact, filterChange };
