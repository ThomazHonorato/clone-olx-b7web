import React from 'react';
import { HeaderArea } from './styled';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo01">O</span>
                        <span className="logo02">L</span>
                        <span className="logo03">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="">Login</Link></li>
                        <li><Link to="">Cadastrar</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;