/* eslint-disable import/no-anonymous-default-export */
import { 
  COMENZAR_DESCARGA_DATA,
  DESCARGA_DATA_EXITO,
  DESCARGA_DATA_ERROR,
  LIMPIAR_DATA 
} from '../types';

const initalState = { 
  data: {},
  loading: false,
  error: false
};

export default function (state=initalState, action) {

  switch(action.type){
    case COMENZAR_DESCARGA_DATA:
      return {
        ...state,
        loading: action.payload
      }
    case DESCARGA_DATA_EXITO:
      return{
        ...state,
        loading: false,
        error: false,
        data: action.payload.results[0]
      }
    
    case DESCARGA_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    case LIMPIAR_DATA:
      return {
        ...initalState
      }
      
    default: 
      return state;
  }

}