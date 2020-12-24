import React from 'react'
import LoginForm from './login/LoginForm';
import Forgot_Password from './login/Login_Form/Forgot_Pass/Forgot_Password';
import Verify_OTP from './login/Login_Form/Request_OTP/Verify_OTP';
import New_Pass from './login/Login_Form/New_Pass/New_Pass';
import Layout1 from '../../Layout/Layout1';
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Users from './Sider_Pages/User/Users';
import User_Groups from './Sider_Pages/User-Groups/User_Groups';
import  Blog  from './Sider_Pages/Blog/Blog';
import {PageStyle} from './PageStyle';

export default function Page() {
    return (
        <BrowserRouter>
        <PageStyle>
            <div>
      
                <Switch >

                    <Route path='/' exact component={LoginForm} />
                    <Route path='/req_otp' component={Forgot_Password} />
                    <Route path='/verify_otp' component={Verify_OTP} />
                    <Route path='/new_pass' component={New_Pass} />
                    <Route path='/layout1' component={Layout1} />
                   

                    <Route path="/users" exact component={Users} />
                    <Route path="/groups" component={User_Groups}/>
                    <Route path="/blog"  component={Blog}/>
                    <Route path="/chatroom" component={Users}/>
                    <Route path="/taskmanagement" component={Users}/>



                </Switch>

            </div>
            </PageStyle>
        </BrowserRouter>
    )
}
