import React from 'react'
import { Layout } from 'antd';
import { HeaderStyle } from './HeaderStyle';
import Zeronsec_Logo from '../../../Core/Logo/Zeronsec_logo.svg';
import { Avatar } from 'antd';

export default function Header1() {
    return (
        <>
            <HeaderStyle>
               
                  

                        <img className="Header_Logo" src={Zeronsec_Logo} alt="Zeronsec" />


                        <Avatar>AD</Avatar>


                  

            </HeaderStyle>
        </>
    )
}
