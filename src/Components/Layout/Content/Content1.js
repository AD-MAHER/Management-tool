import React from 'react'
import { Layout } from 'antd';
import { ContentStyle } from './ContentStyle';
import { Switch , Route } from 'react-router-dom';
import Users from '../../Module/Pages/Sider_Pages/User/Users';
import User_Groups from '../../Module/Pages/Sider_Pages/User-Groups/User_Groups';


export default function Content1() {
    return (
        <>
        <Switch>
            <ContentStyle>
            <Layout>
            
            <Route path="/" exact component={Users}/>
        <Route path="/groups" component={User_Groups}/>
        <Route path="/blog" component={Users}/>
        <Route path="/chatroom" component={Users}/>
        <Route path="/taskmanagement" component={Users}/>
      
        </Layout>
            </ContentStyle>
            </Switch>
        </>
    )
}
