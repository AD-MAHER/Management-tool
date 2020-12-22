import React from 'react'
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';
import Input1 from '../../../../globalComponents/FormComp/Input1';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { ForgotStyle } from './ForgotStyle';
import {NavLink} from "react-router-dom";
export default function Forgot_Password() {
    return (
        <>
            <ForgotStyle>

                <div className="loginClass">
                   
                    <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

                    <h2 className="Head2">Forgot Password</h2>

                    <h3 className="Head1">you'll receive OTP via email.</h3>

                    <Form className="FormClass">

                        <Input1 className="uni_margin" name="email" label="Enter your Registerd Email" rules={[{ required: true, message: 'Email' },
                        { type: 'email', message: 'Please enter in this form "abc@xyz.123"' },
                        ]} input={<Input />} />


                        <NavLink to="/req_OTP"><Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                            className="button_css"
                            type='button'>Request OTP</Button1></NavLink>


                    </Form>

                </div>
            </ForgotStyle>
        </>
    );
}
