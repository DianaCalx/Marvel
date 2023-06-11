import React, { useEffect } from 'react';
import '../styles/characterScreen.scss';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { descargarDataAction } from '../actions/dataAction';
import { limpiarData } from '../actions/dataAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//Redux
import { useDispatch, useSelector } from 'react-redux';

const CharacterScreen = () => {
  const { id, page } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const loading = useSelector(state => state.data.loading)
  const dataComics = data.comics?.items;
  const dataStories = data.stories?.items;
  const imageData = data.thumbnail?.path;
  const { name } = data;
  const { title } = data;


  useEffect(() => {
    const descargarCharacter = () => {
      dispatch(descargarDataAction(id, page))
    }
    descargarCharacter();
    return () => {
      dispatch(limpiarData());
    }
  }, []);

  if (!['characters', 'comics', 'stories'].includes(page)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {loading ? <p className='character_loading'>Cargando....</p>
        :
        <div className='character_screen'>
          <div className='container_character'>
            <div className='character_grid'>
              <img className='character_imagen' src={`${imageData}.jpg`} alt='name' />
              <div className='character_description'>
                <h1 className='character_nm'>{name || title}</h1>
              </div>
            </div>

            {!dataComics ? null :
              <div className='character_list_comics'>
                <h2 className='character_comics'>Comics</h2>
                <div>
                  {
                    dataComics?.map((comic, index) => (
                      <li key={index} >{comic.name}</li>
                    ))}
                </div>
              </div>
            }

            {!dataStories ? null :
              <div className='character_list_stories'>
                <h2 className='character_stories'>Stories</h2>
                <div>
                  {
                    dataStories?.map((story, index) => (
                      <li key={index} >{story.name}</li>
                    ))}
                </div>
              </div>
            }

          </div>
        </div>
      }
    </>
  )
}

export default CharacterScreen