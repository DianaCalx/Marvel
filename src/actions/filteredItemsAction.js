import axios from 'axios';

import { 
  COMENZAR_DESCARGA_ITEMS,
  DESCARGA_ITEMS_EXITO,
  DESCARGA_ITEMS_ERROR,
  LIMPIAR_ITEMS
} from '../types';

export function descargarFilteredItemsAction({  name, comic, story, format, page }) {
  return async (dispatch) => {
    dispatch(descargaFilteredItems());
    try {
      const respuesta = await axios.get(`https://gateway.marvel.com/v1/public/${page}?offset=0${name ? `&nameStartsWith=${name}` : ''}${format ? `&format=${format}` : ''}${comic ? `&comics=${comic}` : ''}${story ? `&stories=${story}` : ''}&ts=1000&apikey=cf1244ae74762dc0e2a66039c1d89b2e&hash=5ae67fb19f85d1407d7f2e797c8becad`);
      dispatch(descargaFilteredItemsExito(respuesta.data.data));
    } catch (error) {
      dispatch(descargaFilteredItemsError());
    }
  }
}

const descargaFilteredItems = () => ({
  type: COMENZAR_DESCARGA_ITEMS,
  payload: true
})

const descargaFilteredItemsExito = (character) => ({
  type: DESCARGA_ITEMS_EXITO,
  payload: character
})

const descargaFilteredItemsError = () => ({
  type: DESCARGA_ITEMS_ERROR,
  payload: true
})

export const limpiarItems = () => ({
  type: LIMPIAR_ITEMS
})