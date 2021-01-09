import React from 'react'
import { Form } from 'antd';
import { Input , message} from 'antd';
import Button1 from '../../globalComponents/Button/Button1';
import Zeronsec_Logo from "../../../../Core/Logo/Zeronsec_logo.svg"
import LoginPage from './LoginPage';
import Auth from "../../../../Auth";
import { useHistory } from "react-router-dom";
import axios from 'axios';
export default function LoginForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
    axios.post(`http://10.1.1.20:8080/login` , values).then(
      response => {
        console.log(response.data.status);
        if (response.data.status === true) {
          return (
            Auth.login(() => {
              history.push("/layout/users/");
              message.success('You have successfully logged in')
            })

          )
        } else {
          return (
            message.error('Please Enter Valid Username & Password')
          );
      };
    }
    )
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

<Form.Item name="username" label="User Name :" rules={[
           
            {
              required: true,
              message: 'Please input your username',
            },
          ]} >

            <Input placeholder="Enter Your User Name"/>
          </Form.Item>
         



          <Form.Item className="logpass" name="password" label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },

            ]} >

            <Input.Password  placeholder="Enter Your Password"/>
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
