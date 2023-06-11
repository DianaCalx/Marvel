import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Character from './Character';
import useDebounce from '../utils/useDebounce';
import queryString from 'query-string';
import '../styles/characters.scss';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { descargarFilteredItemsAction } from '../actions/filteredItemsAction';
import { limpiarItems } from '../actions/filteredItemsAction';

const Characters = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const characters = useSelector(state => state.items.data);
  const comics = useSelector(state => state.comics.data);
  const stories = useSelector(state => state.stories.data);
  const debounce = useDebounce();
  const { name, comic, story, format } = queryString.parse(location.search);
  const [params, setParams] = useState({ name, comic, story });
  const [searchParams, setSearchParams] = useSearchParams([]);

  // useEffect(() => {
  //   const descargarStates = () => {
  //     dispatch(descargarComicsAction());
  //     dispatch(descargaStoriesAction());
  //   }
  //   descargarStates();
  // }, [dispatch]);

  useEffect(() => {
    debounce(() => {
      if (!name && !comic && !story) {
        // dispatch(descargarCharactersAction());
        dispatch(descargarFilteredItemsAction({ name, comic, story, format, page }));
      } else {
        apiRequest();
      }
    });

    return () => {
      dispatch(limpiarItems());
    }

  }, [params]);

  const changeHandler2 = e => {
    setParams({ ...params, [e.target.name]: e.target.value });
    const paramsObject = Object.entries({ ...params, [e.target.name]: e.target.value }).filter(param => !!param[1]);
    setSearchParams(paramsObject);
  };

  const apiRequest = () => {
    // Llamar a la API
    dispatch(descargarFilteredItemsAction({ name, comic, story, format, page }));
  }

  return (
    <div className='characters'>
      <div className='container_characters'>
        <div className='characters_titulo'>Characters</div>
        <div className='characters_inputs'>
          <input className='character_input_search'
            type='text'
            placeholder='Search'
            name='name'
            value={params.name}
            onChange={changeHandler2} />
          <select id='comic' name='comic' className='character_select_comic' value={params.comic} onChange={changeHandler2}>
            <option key='comics' value="">Select a comic</option>
            {comics.map((comic) => (
              <option
                key={comic.id}
                value={comic.id}
              >
                {comic.title}
              </option>
            ))}
          </select>
          <select id='stories' name='story' className='character_select_story' value={params.story} onChange={changeHandler2}>
            <option key='story' value="">Select a story</option>
            {stories.map((story) => (
              <option
                key={story.id}
                value={story.id}
              >
                {story.title}
              </option>
            ))}
          </select>
        </div>

        <div className='characters_grid'>
          {!characters.length ? <p className='character_noresultado'>No results found</p>
            : characters.map(character => (
              <Character
                key={character.id}
                id={character.id}
                name={character.name}
                pathImg={character.thumbnail.path}
              />
            )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Characters