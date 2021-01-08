import React, {useState , useEffect} from 'react'
import { Layout ,Menu } from 'antd';
import {NavLink , useLocation} from "react-router-dom";
import { SiderStyle } from './SiderStyle';
import {menus} from '../../../Core/Data/Menu_data';
import Icons from "../../Module/globalComponents/Icon/Icons";

export default function Sider1() {
    
    const [key, setKey] = useState("users");
    const {pathname}= useLocation();
    useEffect(() => {
      var a = pathname.split("/").filter((x) => x);
      setKey(a[1]);
    }, [pathname]);
  
    console.log(pathname)
    return (
        <>
            <SiderStyle>

                <Layout>

                <Menu defaultSelectedKeys={key} selectedKeys={key} >
                    
                  {menus.map((menu)=>{
                   
                      return(
                       
                      <Menu.Item  key={menu.key} icon={<a href={menu.routingPath}> 
                      <Icons type={menu.iconName}/></a>}>
                          <NavLink to={menu.routingPath}>
                          {menu.name}
                          </NavLink>
                      </Menu.Item>
                     
                      )  })
                  }
               
                    
                  </Menu>
                    
          
                </Layout>
                

            </SiderStyle>
        </>
    )
}
