import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import '../styles/comics.scss';
import useDebounce from '../utils/useDebounce';
import Comic from './Comic';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { descargarFilteredItemsAction } from '../actions/filteredItemsAction';
import { limpiarItems } from '../actions/filteredItemsAction';

const Comics = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const comics = useSelector(state => state.items.data);
  const debounce = useDebounce();
  const { name, comic, story, format } = queryString.parse(location.search);
  const [params, setParams] = useState({ name, comic, format });
  const [searchParams, setSearchParams] = useSearchParams([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const changeHandler = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    const paramsObject = Object.entries({ ...params, [e.target.name]: e.target.value }).filter(param => !!param[1]);
    setSearchParams(paramsObject);
  }

  const apiRequest = () => {
    // Llamar a la API
    dispatch(descargarFilteredItemsAction({ name, comic, story, format, page }));
  }

  return (
    <div className='comics'>
      <div className='comics_container'>
        <div>
          <h1 className='comics_titulo'>COMICS</h1>
          <div className='comics_input'>
            <input className='comics_name_input' type='text' placeholder='Search' name='name' value={params.name} onChange={changeHandler} />
            <select id='format' name='format' className='comics_select' value={params.format} onChange={changeHandler}>
              <option value=''>Select a Format</option>
              <option value='comic'>Comic</option>
              <option value='magazine'>Magazine</option>
              <option value='digest'>Digest</option>
              <option value='trade%20paperback'>Trade paperback</option>
              <option value='hardcover'>Hardcover</option>
              <option value='graphic%20novel'>Graphic Novel</option>
              <option value='digital%20comic'>Digital Comic</option>
              <option value='inifinite%20comic'>Infinite comic</option>
            </select>
          </div>
        </div>
        <div className='comics_grid'>
          {!comics.length ? <p className='comics_noresultado'>No results found</p>
            : comics.map(comic => (
              <Comic
                key={comic.id}
                id={comic.id}
                title={comic.title}
                pathImg={comic.thumbnail.path}
              />
            )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Comics