import React from 'react'
import { Layout } from 'antd';
import { ContentStyle } from './ContentStyle';
import User_Groups from '../../Module/Pages/Sider_Pages/User-Groups/User_Groups';
import Blog from '../../Module/Pages/Sider_Pages/Blog/Blog';
import Users from '../../Module/Pages/Sider_Pages/User/Users';
import Chatroom from '../../Module/Pages/Sider_Pages/ChatRoom/Chatroom';
import TaskMangement from '../../Module/Pages/Sider_Pages/TaskManagement/TaskManagement';
import { Switch, Route } from 'react-router-dom';



export default function Content1() {

    return (
        <>
            <ContentStyle>
                <Layout>
                    <Switch>
                        <Route path="/layout/" exact component={Users} />
                        <Route path="/layout/groups" component={User_Groups} />
                        <Route path="/layout/blog" component={Blog} />
                        <Route path="/layout/chatroom" component={Chatroom} />
                        <Route path="/layout/taskmanagement" component={TaskMangement} />
                    </Switch>
                </Layout>
            </ContentStyle>
        </>
    )
}
