import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
          <header>
            <nav>
            <div className='a'>
            <img src='logo.png' />
            <ul>
            <a className='about' href='#about'>О нас</a>
            <a className='projects' href="#projects">Проекты</a>
            <a className='otzyvy' href="#otzyvy">Отзывы</a>
            <a className='partners' href='#partners'>Партнеры</a>
            </ul>
            <a href='https://t.me/pixelcraft_me' target='blank'><button>Обсудить проект</button></a>
            </div>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;