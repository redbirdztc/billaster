import React from 'react';

import './App.css';

import SquareButton from './button_square';
import menuIcon from './img/menu.png';
import searchIcon from './img/search.png';
import Spacer from './spacer';

function Header() {
    const btnClick = () => {
        console.log('Button clicked');
    }
    const size = "5vw";
    const align = "5vw";

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw', height: '6vh' }}>
            <Spacer width={align} />
            <SquareButton onClick={btnClick} icon={menuIcon} size={size} />
            <Spacer width={align} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: size }}>
                <span style={{ fontFamily: 'SmileySans', fontSize: '2.5vh' }}>Billaster</span>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <SquareButton onClick={btnClick} icon={searchIcon} size={size} />
            </div>
            <Spacer width={align} />
        </div>
    )
}

export default Header;