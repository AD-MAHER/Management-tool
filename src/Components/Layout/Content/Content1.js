import React from 'react'
import { Layout } from 'antd';
import { ContentStyle } from './ContentStyle';
// import { Switch , Route } from 'react-router-dom';
// import Users from '../../Module/Pages/User/Users';

const { Content } = Layout;
export default function Content1() {
    return (
        <div>
            <ContentStyle>
                <Layout>
                    <Content>
                   Hello
                    
                    </Content>
                </Layout>
            </ContentStyle>
        </div>
    )
}
