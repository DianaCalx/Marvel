import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/character.scss';

const Character = ({ id, name, pathImg }) => {

  const classImage = String(pathImg).includes('image_not_available') ? 'not_image character_img' : 'character_img';

  const isBookmark = true;

  return (
    <div className='character'>
      <div className='character_name'>{name}</div>
      <Link className='character_link' to={`/characters/${id}`}>
        {isBookmark && <FontAwesomeIcon className='character_bookmark-icon' icon={faBookmark} />}
        <img className={classImage} src={`${pathImg}.jpg`} alt={`Imagen de ${name}`} />
      </Link>
    </div>
  )
}

export default Character