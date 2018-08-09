import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { mail, messageSquare, phoneCall, search, bell , info } from 'react-icons-kit/feather/'

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="leftheader">
                    <Icon className="headerico themeico" icon={mail} />
                    <Icon className="headerico" icon={messageSquare} />
                    <Icon className="headerico" icon={phoneCall} />
                    <form className="headerform">
                        <Icon className="searchico" icon={search} />
                        <input className="searchheader" type="text" />
                    </form>
                </div>
            </div>

            <div className="headerright">
                <span className="userName">Admin</span>
                <Icon className="headerico" icon={bell} />
                    <Icon className="headerico" icon={info} />
            </div>
        </header>
    )
}

export default Header;