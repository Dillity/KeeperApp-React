import React from 'react';
import {combineReducers, createStore} from 'redux';
import notesReducer from "./notesReducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    notes: notesReducer,
    form: formReducer
});

const store = createStore(reducers);
window.store = store;

export default store;