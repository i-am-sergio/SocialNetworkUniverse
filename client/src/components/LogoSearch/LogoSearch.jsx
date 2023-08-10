import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons';
import {BiSolidSearchAlt2} from "react-icons/bi";
import {DiJqueryUiLogo} from "react-icons/di";

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <DiJqueryUiLogo className="unsalogoPrincipal"/>
            {/* <img src={Logo} alt=""/> */}
            <div className="Search">
                <input type="text" placeholder="#Explore"/>
                <div className="">
                    {/* <UilSearch/> */}
                    <BiSolidSearchAlt2 className="unsa"/>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;