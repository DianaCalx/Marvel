import axios from "axios";

import { 
  COMENZAR_DESCARGA_STORIES,
  DESCARGA_STORIES_EXITO,
  DESCARGA_STORIES_ERROR
} from '../types';

export function descargaStoriesAction() {
  return async(dispatch) => {
    dispatch(descargaStories());
    try {
      const respuesta = await axios.get('http://gateway.marvel.com/v1/public/stories?offset=1600&limit=20&ts=1000&apikey=cf1244ae74762dc0e2a66039c1d89b2e&hash=5ae67fb19f85d1407d7f2e797c8becad');
      dispatch(descargaStoriesExito(respuesta.data.data));
    } catch (error) {
      dispatch(descargaStoriesError());
    }
  }
}

const descargaStories = () => ({
  type: COMENZAR_DESCARGA_STORIES,
  payload: true
})

const descargaStoriesExito = stories => {
  const { results, ...rest } = stories;
  return {
    type: DESCARGA_STORIES_EXITO,
    payload: {
      results: results,
      pagination: rest
    }
  }
}

const descargaStoriesError = () => ({
  type: DESCARGA_STORIES_ERROR,
  payload: true
})