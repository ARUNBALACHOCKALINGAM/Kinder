import React from 'react';



//assets
import logo from "../../assets/img/natwestlogo.png";
import kinder from "../../assets/img/Group 36.svg";

const Header = props => {
    return (
        <div>
            <img className="w-40 mx-auto mt-5 tablet:w-40 desktop:w-48" src={logo} alt="natwestlogo"/>
            <img className='w-40 mx-auto mt-3 tablet:w-32 desktop:w-48'  src={kinder} alt="kinder"/>
        </div>
    );
};



export default Header;