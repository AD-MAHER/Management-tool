import React, { useState } from 'react'
import { Form, Input , Button  } from 'antd';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import {  NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';
import { onlyDigit } from "../../../../globalComponents/ValidationArray/onlyValidation";
import { useDispatch } from "react-redux";
import  {Verify_Otp } from "../../../../../../Core/Redux/Action/VerifyOTPAction";

export default function Verify_OTP(props) {
    const [symbolsArr2] = useState(onlyDigit);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        form.resetFields();
        setLoading(true);
        console.log(values);
        dispatch(Verify_Otp(values));
        setTimeout(() => {
            setLoading(false)
          }, 1000);

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

                        <Form.Item name="OTP" label="Enter&nbsp;OTP" 
                         onKeyDown={e => symbolsArr2.includes(e.key) && e.preventDefault()}
                         rules={[{ required: true, message: 'OTP is required' }]} >
                            <Input  
                            autoComplete="off"
                              maxLength={6} minLength={6} hasFeedback  />
                        </Form.Item>





                        <Button 
                        loading={loading} 
                            type='primary'
                            key="submit"
                            htmlType="submit" form="verifyotp"
                        >Verify&nbsp;OTP</Button>


                    </Form>

                </div>
            </LoginPage>
        </>
    );
}
