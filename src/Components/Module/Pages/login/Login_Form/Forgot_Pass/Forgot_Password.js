import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import Zeronsec_Logo from '../../../../../../Core/Logo/Zeronsec_logo.svg';
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LoginPage from '../../LoginPage';
import { Forgot_Pass } from "../../../../../../Core/Redux/Action/ForgotPassAction";
import { useDispatch } from "react-redux";


export default function Forgot_Password(props) {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setLoading(true)
    dispatch(Forgot_Pass(values));
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  };

  return (
    <>
      <LoginPage  {...props}>


        <div className="loginClass">
          <NavLink to="/"><span><ArrowLeftOutlined className="Icon_Class" /></span></NavLink>
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
            <Form.Item name="email" label="Email :" rules={[
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


            <Button
              type='primary'
              key="submit"
              htmlType="submit" form="reqotp"
              loading={loading}
              className="button_css"

            >Request&nbsp;OTP
            </Button>


          </Form>
        </div>

      </LoginPage>
    </>
  );
}
