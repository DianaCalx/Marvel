/* eslint-disable import/no-anonymous-default-export */

import { 
  COMENZAR_DESCARGA_COMICS,
  DESCARGA_COMICS_EXITO,
  DESCARGA_COMICS_ERROR, 
} from '../types';

const initialState = {
  data: [],
  loading: false,
  error: false,
  pagination: null
}

export default function (state=initialState, action){
  switch(action.type){
    
    case COMENZAR_DESCARGA_COMICS:
      return {
        ...state,
        loading: action.type
      }

    case DESCARGA_COMICS_EXITO:
      return{
        ...state,
        loading: false,
        error: false,
        data: action.payload.results,
        pagination: action.payload.pagination
      }
    
    case DESCARGA_COMICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}