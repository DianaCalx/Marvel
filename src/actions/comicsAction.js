import axios from "axios";

import {
  COMENZAR_DESCARGA_COMICS,
  DESCARGA_COMICS_EXITO,
  DESCARGA_COMICS_ERROR
} from '../types';

//Descarga comics
export function descargarComicsAction() {
  return async (dispatch) => {
    dispatch(descargarComics());
    try {
      const respuesta = await axios.get('http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=cf1244ae74762dc0e2a66039c1d89b2e&hash=5ae67fb19f85d1407d7f2e797c8becad');
      dispatch(descargaComicsExitosa(respuesta.data.data));
    } catch (error) {
      dispatch(descargaComicsError());
    }
  }
}

const descargarComics = () => ({
  type: COMENZAR_DESCARGA_COMICS,
  payload: true
})

const descargaComicsExitosa = comics => {
  const { results, ...rest } = comics;
  return {
    type: DESCARGA_COMICS_EXITO,
    payload: {
      results: results,
      pagination: rest
    }
  }
}

const descargaComicsError = () => ({
  type: DESCARGA_COMICS_ERROR,
  payload: true
})