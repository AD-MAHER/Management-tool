import React from 'react'
import {Form, Input } from 'antd';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { NavLink, useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';
import Auth from '../../../../../../Auth';

export default function Forgot_Password(props) {
    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = () => {
        form.resetFields();
        
           Auth.loginProcess(() => {
            history.push("/verify_otp");
          });
      };

    return (
        <>
    <LoginPage  {...props}>
          
            
                <div className="loginClass">
                <NavLink to="/"><span><ArrowLeftOutlined  className="Icon_Class"/></span></NavLink>
                    <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

                    <h2 className="Head2">Forgot Password</h2>

                    <h3 className="Head1">you'll receive OTP via email.</h3>

               
                    <Form 
           className="FormClass forClass"
            form={form}
            id="reqotp"
            onFinish={onFinish}
            >
           <p>Enter&nbsp;your&nbsp;Registerd&nbsp;Email&nbsp;Id:</p>
             <Form.Item  name="email"  label="Email :"   rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]} >
               
              <Input />
              </Form.Item>
        

               <Button1
                        type='primary'
                        key="submit"
                        htmlType="submit" form="reqotp" 
                        buttonStyle="btn-success-solid" 
                        buttonSize="btn-medium"
                        className="button_css"
                        
                        >Request&nbsp;OTP
            </Button1>
               

            </Form>
                </div>
           
            </LoginPage>
        </>
    );
}
