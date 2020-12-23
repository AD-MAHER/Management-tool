import React from 'react'
import Content1 from './Content/Content1'
import Header1 from './Header/Header1'
import Sider1 from './Sider/Sider1'
import Footer1 from './Footer/Footer1';
import { Layout } from 'antd';
import { HeaderStyle } from './Header/HeaderStyle';
import { SiderStyle } from './Sider/SiderStyle';
import { FooterStyle } from './Footer/FooterStyle';
import { ContentStyle } from './Content/ContentStyle';

const { Header, Footer, Sider, Content } = Layout;

export default function Layout1() {
  return (
    <div>

      <Layout>
        <Header1 />
      </Layout>



      <Layout >
        <Sider1 />
        
      </Layout>

<Layout><Footer1 /></Layout>
      {/* <Layout>

      <HeaderStyle>
      <Header><Header1 /></Header>
      </HeaderStyle>

      <Layout>
        
        <SiderStyle>
        <Sider collapsed><Sider1 /></Sider>
        
        </SiderStyle>

        <ContentStyle>
        <Content><Content1 /></Content>
        </ContentStyle>

      </Layout>

      <FooterStyle><Footer1 /></FooterStyle>

    </Layout> */}



    </div>
  )
}
