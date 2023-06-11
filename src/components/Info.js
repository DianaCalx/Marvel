import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { descargarComicsAction } from '../actions/comicsAction';
import { descargaStoriesAction } from '../actions/storiesAction';

const Info = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(descargarComicsAction());
    dispatch(descargaStoriesAction());
  }, [dispatch])

  return <></>;
}

export default Info;