import React from 'react'
import LoginPage from './login/LoginPage';
import LoginForm from './login/LoginForm';
import Forgot_Password from './login/Login_Form/Forgot_Pass/Forgot_Password';
import Verify_OTP  from './login/Login_Form/Request_OTP/Verify_OTP';
import New_Pass from './login/Login_Form/New_Pass/New_Pass';
import Layout1 from '../../Layout/Layout1';
import { Switch, Route , Redirect} from "react-router-dom";
export default function Page() {
    return (

        <div>

<Switch >
                           
                           <Route path='/' exact component={LoginForm} />
                           <Route path='/req_otp' component={Forgot_Password} />
                           <Route path='/verify_otp' component={Verify_OTP} />
                           <Route path='/new_pass' component={New_Pass} />
                           <Route path='/layout1' component={Layout1} />

                       </Switch>

        </div>

    )
}
