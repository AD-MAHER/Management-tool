import React from 'react'
import { Layout } from 'antd';
import { HeaderStyle } from './HeaderStyle';
import Zeronsec_Logo from '../../../Core/Logo/Zeronsec_logo.svg';
import { Avatar } from 'antd';

export default function Header1() {
    return (
        <>
            <HeaderStyle>
               
                  
            <div className="logo-div">
                        <img className="Header_Logo" src={Zeronsec_Logo} alt="Zeronsec" />

</div>
                        <div className="avatar-div">
                        <Avatar>AD</Avatar>
                        </div>


                  

            </HeaderStyle>
        </>
    )
}
