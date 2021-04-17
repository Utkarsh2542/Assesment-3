import { lsitReducer, NotesReducer, PostAPIReducer } from './reducer';
import { createStore, combineReducers } from 'redux';
export default combineReducers({
  id: PostAPIReducer,
  notes: NotesReducer,
  list: lsitReducer
});