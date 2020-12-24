import React from 'react'
import { Layout ,Menu } from 'antd';
import {NavLink} from "react-router-dom";
import { SiderStyle } from './SiderStyle';
import {menus} from '../../../Core/Data/Menu_data';
import Icons from "../../Module/globalComponents/Icon/Icons";

export default function Sider1() {
    
    return (
        <>
            <SiderStyle>

                <Layout>

                    
                    <Menu >
                  {menus.map((menu)=>{
                      return(
                      <Menu.Item key={menu.key} icon={<a href={menu.routingPath}> <Icons type={menu.iconName}/></a>}>
                          <NavLink to={menu.routingPath}>
                          {menu.name}
                          </NavLink>
                      </Menu.Item>
                      )   })
                  }
                </Menu>
                    
                   
                    
          
                </Layout>
                

            </SiderStyle>
        </>
    )
}
