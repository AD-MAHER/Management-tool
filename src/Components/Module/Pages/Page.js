import React from 'react'
import LoginForm from './login/LoginForm';
import Forgot_Password from './login/Login_Form/Forgot_Pass/Forgot_Password';
import Verify_OTP from './login/Login_Form/Request_OTP/Verify_OTP';
import New_Pass from './login/Login_Form/New_Pass/New_Pass';
import Layout1 from '../../Layout/Layout1';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PageStyle } from './PageStyle';
import ProtectedRoute from "../../../ProtectedRoute";
import ProtectedLogin from "../../../ProtectedLogin";
export default function Page() {

    return (
        <BrowserRouter>
            <PageStyle>
                <div>

                    <Switch >

                        <Route path='/' exact component={LoginForm} />
                        <Route path='/req_otp' component={Forgot_Password} />
                        <ProtectedLogin path='/verify_otp' component={Verify_OTP} />
                        <ProtectedLogin path='/new_pass' component={New_Pass} />
                        <ProtectedRoute path="/layout" component={Layout1} />


                    </Switch>

                </div>
            </PageStyle>
        </BrowserRouter>
    )
}
