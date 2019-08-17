import React from 'react';

import {Link} from 'react-router-dom';

import { ReactComponent as Logo } from './crown.svg';

import './header.style.scss';

const Header = (props) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>OPTIONS</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;