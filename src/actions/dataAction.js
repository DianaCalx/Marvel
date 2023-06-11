import axios from 'axios';

import {
  COMENZAR_DESCARGA_DATA,
  DESCARGA_DATA_EXITO,
  DESCARGA_DATA_ERROR,
  LIMPIAR_DATA
} from '../types';

export function descargarDataAction(id, page) {
  return async (dispatch) => {
    dispatch(descargaData());
    try {
      const respuesta = await axios.get(`http://gateway.marvel.com/v1/public/${page}/${id}?ts=1000&apikey=cf1244ae74762dc0e2a66039c1d89b2e&hash=5ae67fb19f85d1407d7f2e797c8becad`);
      dispatch(descargaDataExito(respuesta.data.data));
    } catch (error) {
      dispatch(descargaDataError());
    }
  }
}

const descargaData = () => ({
  type: COMENZAR_DESCARGA_DATA,
  payload: true
})

const descargaDataExito = character => ({
  type: DESCARGA_DATA_EXITO,
  payload: character
})

const descargaDataError = () => ({
  type: DESCARGA_DATA_ERROR,
  payload: true
})

export const limpiarData = () => ({
  type: LIMPIAR_DATA
})
