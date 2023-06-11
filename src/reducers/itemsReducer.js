import { 
  COMENZAR_DESCARGA_ITEMS,
  DESCARGA_ITEMS_EXITO,
  DESCARGA_ITEMS_ERROR,
  LIMPIAR_ITEMS
} from '../types';

const initalState = { 
  data: [],
  loading: false,
  error: false,
  pagination: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=initalState, action) {

  switch(action.type){
    case COMENZAR_DESCARGA_ITEMS:
      return {
        ...state,
        loading: action.payload
      }
    case DESCARGA_ITEMS_EXITO:
      return{
        ...state,
        loading: false,
        error: false,
        data: action.payload.results,
        pagination: action.payload.pagination
      }
    
    case DESCARGA_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LIMPIAR_ITEMS:
      return {
        ...initalState
      }
    default: 
      return state;
  }

}