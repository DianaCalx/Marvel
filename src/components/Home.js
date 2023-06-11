import React from 'react';
import portada from '../img/portada.jpg';
import '../styles/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='container_home'>
        <div className='home_title'>Welcome to Marvel</div>
        <img className='home_img' src={portada} alt='Portada Marvel'/>
        <div className='home_description'>
          The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.
        </div>
      </div>
    </div>
  )
}

export default Home