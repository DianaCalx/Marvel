import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/comic.scss';

const Comic = ({ id, title, pathImg }) => {

  const classImage = String(pathImg).includes('image_not_available') ? 'not_image character_img' : 'character_img';

  const isBookmark = true;

  return (
    <div className='comic'>
      <div className='comic_name'>{title}</div>
      <Link className='comic_link' to={`/comics/${id}`}>
        <img className={classImage} src={`${pathImg}.jpg`} alt={`Imagen de ${title}`} />
      </Link>
    </div>
  )
}

export default Comic