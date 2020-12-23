import React from 'react'
import { Layout ,Menu } from 'antd';
import {Link} from "react-router-dom";
import { SiderStyle } from './SiderStyle';
import Content1 from '../Content/Content1';
import {menus} from '../../../Core/Data/Menu_data';
import Icons from "../../Module/globalComponents/Icon/Icons";
const { Sider } = Layout;
export default function Sider1() {
    return (
        <div>
            <SiderStyle>

                <Layout>

                    <Sider collapsed>
                    <Menu >
                  {menus.map((menu)=>{
                      return(
                      <Menu.Item key={menu.key}>
                          <Link to={menu.routingPath}>
                          <Icons type={menu.iconName}/>
                          </Link>
                      </Menu.Item>
                      )   })
                  }
                </Menu>
                    
                    </Sider>
                    <Layout>
                    <Content1/>
                    </Layout>
          
                </Layout>
                

            </SiderStyle>
        </div>
    )
}
