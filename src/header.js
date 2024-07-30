import React from 'react';

import './App.css';

import SquareButton from './button/square';
import menuIcon from './img/menu.png';
import searchIcon from './img/search.png';

function Header() {
    const btnClick = () => {
        console.log('Button clicked');
    }

    return (
        <div className='flex content-between items-center w-full h-12' >
            <div className='w-5 h-fit ml-5'>
                <SquareButton onClick={btnClick} icon={menuIcon} />
            </div>
            <div className='w-5 h-fit ml-5 flex content-center items-center' >
                <span style={{ fontFamily: 'SmileySans', fontSize: '2.5vh' }}>Billaster</span>
            </div>
            <div className='w-5 h-fit mr-5 ml-auto' >
                <SquareButton onClick={btnClick} icon={searchIcon} />
            </div>
        </div>
    )
}

export default Header;