import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import itemsReducer from './itemsReducer';
import comicsReducer from './comicsReducer';
import storiesReducer from './storiesReducer';

export default combineReducers({
  items: itemsReducer,
  comics: comicsReducer,
  stories: storiesReducer,
  data: dataReducer
})