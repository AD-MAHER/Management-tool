import React from 'react'
import { Layout } from 'antd';
import {HeaderStyle} from './HeaderStyle';
import Zeronsec_Logo from '../../../Core/Logo/Zeronsec_logo.svg'; 
import { Avatar } from 'antd';

const { Header } = Layout;
export default function Header1() {
    return (
        <div>
        <HeaderStyle>
            <Layout>
      <Header>
      
      <img className="Header_Logo" src={Zeronsec_Logo} alt="Zeronsec" />
      
      
      <Avatar>AD</Avatar>
     
      
      </Header>
  
    </Layout>
    </HeaderStyle>
        </div>
    )
}
