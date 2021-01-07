import React from 'react'
import {Form} from 'antd';
import { Input } from 'antd';
import Input1 from '../../../../globalComponents/FormComp/Input1';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { ForgotStyle } from './ForgotStyle';
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';


export default function Forgot_Password(props) {
    return (
        <>
    <LoginPage  {...props}>
            <ForgotStyle>
            
                <div className="loginClass">
                <NavLink to="/"><span><ArrowLeftOutlined  className="Icon_Class"/></span></NavLink>
                    <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

                    <h2 className="Head2">Forgot Password</h2>

                    <h3 className="Head1">you'll receive OTP via email.</h3>

                    <Form className="FormClass" >
                        
                       <Form.Item name="email" label="Enter&nbsp;your&nbsp;Registerd&nbsp;Email">
                       <Input  className="uni_margin"  rules={[{ required: true, message: 'Email' },
                        { type: 'email', message: 'Please enter in this form "abc@xyz.123"' },
                        ]}  />
                       </Form.Item>
                            
               

                        <NavLink to='/verify_otp'><Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                            className="button_css"
                            type='button'>Request&nbsp;OTP</Button1></NavLink>


                    </Form>

                </div>
            </ForgotStyle>
            </LoginPage>
        </>
    );
}
