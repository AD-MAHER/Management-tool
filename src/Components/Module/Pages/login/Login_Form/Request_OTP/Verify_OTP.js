import React, { useState } from 'react'
import { Form, Input } from 'antd';
import Button1 from '../../../../globalComponents/Button/Button1';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { useHistory, NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';
import Auth from "../../../../../../Auth";
import { onlyDigit } from "../../../../globalComponents/ValidationArray/onlyValidation";

export default function Verify_OTP(props) {
    const [symbolsArr2] = useState(onlyDigit);
    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = () => {
        form.resetFields();

          
        Auth.loginProcess(() => {
                history.push("/new_pass");
              });

    };
    return (
        <>
            <LoginPage {...props}>
                <div className="loginClass">
                    <NavLink to="/"><span><ArrowLeftOutlined className="Icon_Class" /></span></NavLink>
                    <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />

                    <h2 className="Head2">Verify OTP</h2>

                    <h3 className="Head1">Enter Your 6digit OTP via mail.</h3>

                    <Form className="FormClass"
                        form={form}
                        id="verifyotp"
                        onFinish={onFinish}>
                        <Form.Item name="Enter OTP" label="Enter&nbsp;OTP" 
                         onKeyDown={e => symbolsArr2.includes(e.key) && e.preventDefault()}
                         rules={[{ required: true, message: 'OTP' }]} >
                            <Input  
                            autoComplete="off"
                              maxLength={6} minLength={6} hasFeedback  />
                        </Form.Item>





                        <Button1 buttonStyle="btn-success-solid" buttonSize="btn-medium"
                            className="button_css" type='primary'
                            key="submit"
                            htmlType="submit" form="verifyotp"
                        >Verify&nbsp;OTP</Button1>


                    </Form>

                </div>
            </LoginPage>
        </>
    );
}
