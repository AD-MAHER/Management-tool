import React from 'react'
import { Layout } from 'antd';
import { ContentStyle } from './ContentStyle';
import User_Groups from '../../Module/Pages/Sider_Pages/User-Groups/User_Groups';
import Blog from '../../Module/Pages/Sider_Pages/Blog/Blog';
import Users from '../../Module/Pages/Sider_Pages/User/Users';
import { Switch, Route } from 'react-router-dom';



export default function Content1() {
    
    return (
        <>
            <ContentStyle>
                <Layout>
                <Switch>
                  <Route path="/layout1/" exact component={Users} />
                  <Route path="/layout1/groups" component={User_Groups} />
                  <Route path="/layout1/blog" component={Blog} />
                  <Route path="/layout1/chatroom" component={Users} />
                  <Route path="/layout1/taskmanagement" 
                   
                  component={Users} />
</Switch>  
                </Layout>
            </ContentStyle>
        </>
    )
}
