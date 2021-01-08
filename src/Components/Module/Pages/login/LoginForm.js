import React from 'react'
import { Form } from 'antd';
import { Input } from 'antd';
import Button1 from '../../globalComponents/Button/Button1';
import Zeronsec_Logo from "../../../../Core/Logo/Zeronsec_logo.svg"
import LoginPage from './LoginPage';
import Auth from "../../../../Auth";
import { useHistory } from "react-router-dom";
export default function LoginForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {

    form.resetFields();

    Auth.login(() => {
      history.push("/layout/users/");
    });
  };

  return (
    <LoginPage  {...props}>
      <div className="loginClass">



        <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />


        <h3 className="Head1">Welcome back</h3>


        <h2 className="Head2">Login to your account</h2>


        <Form
          className="FormClass"
          form={form}
          id="loginnow"
          onFinish={onFinish}
        >

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



          <Form.Item name="Password" label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },

            ]} >

            <Input />
          </Form.Item>

          <p className='F1'
           
            onClick={() => {
              Auth.loginProcess(() => {
            history.push("/req_otp");
          });
        }}>Forgot&nbsp;Password?</p>
          


          <Button1 type='primary'

            key="submit"
            htmlType="submit" form="loginnow" buttonStyle="btn-success-solid" buttonSize="btn-medium"
            className="button_css"
          >Login&nbsp;Now</Button1>


        </Form>


      </div>
    </LoginPage>
  )
}
